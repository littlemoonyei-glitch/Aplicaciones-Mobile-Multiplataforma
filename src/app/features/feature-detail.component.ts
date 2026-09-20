import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { FeatureItem, FeatureService } from './feature.service'

@Component({
  standalone: false,
  selector: 'ns-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: [
    './feature-detail.component.css',
    './feature-detail.component.android.css',
    './feature-detail.component.ios.css',
  ],
})
export class FeatureDetailComponent implements OnInit {
  item: FeatureItem | undefined

  constructor(
    private route: ActivatedRoute,
    private featureService: FeatureService,
    private routerExtensions: RouterExtensions,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.item = this.featureService.getFeatureById(id)
  }

  goBack(): void {
    this.routerExtensions.back()
  }
}
