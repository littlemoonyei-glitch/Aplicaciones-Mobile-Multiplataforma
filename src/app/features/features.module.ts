import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { FeaturesRoutingModule } from './features-routing.module'
import { FeaturesComponent } from './features.component'
import { FeatureListComponent } from './feature-list.component'
import { FeatureDetailComponent } from './feature-detail.component'

@NgModule({
  imports: [NativeScriptCommonModule, FeaturesRoutingModule],
  declarations: [FeaturesComponent, FeatureListComponent, FeatureDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeaturesModule {}
