import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Application } from '@nativescript/core'
import { isAndroid } from '@nativescript/core/platform'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'

import { FeatureItem, FeatureService } from './feature.service'

@Component({
  standalone: false,
  selector: 'ns-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: [
    './feature-list.component.css',
    './feature-list.component.android.css',
    './feature-list.component.ios.css',
  ],
})
export class FeatureListComponent implements OnInit {
  featureItems: FeatureItem[] = []
  platformLabel = 'Sistema no identificado'

  constructor(
    private featureService: FeatureService,
    private routerExtensions: RouterExtensions,
  ) {}

  ngOnInit(): void {
    this.featureItems = this.featureService.getItems()

    if (isAndroid) {
      this.platformLabel = 'Android: vista personalizada activa'
    } else {
      this.platformLabel = 'iOS: vista personalizada activa'
    }
  }

  onViewDetail(item: FeatureItem): void {
    this.routerExtensions.navigate(['/features/detalle', item.id], {
      transition: {
        name: 'slide',
      },
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = Application.getRootView() as RadSideDrawer
    if (sideDrawer) {
      sideDrawer.showDrawer()
    }
  }
}
