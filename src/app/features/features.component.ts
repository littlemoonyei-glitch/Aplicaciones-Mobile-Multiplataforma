import { Component } from '@angular/core'

@Component({
  standalone: false,
  selector: 'ns-features',
  templateUrl: './features.component.html',
  styleUrls: [
    './features.component.css',
    './features.component.android.css',
    './features.component.ios.css',
  ],
})
export class FeaturesComponent {}
