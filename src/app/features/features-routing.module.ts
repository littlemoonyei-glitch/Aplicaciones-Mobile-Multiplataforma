import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { FeatureDetailComponent } from './feature-detail.component'
import { FeatureListComponent } from './feature-list.component'
import { FeaturesComponent } from './features.component'

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: FeatureListComponent },
      { path: 'detalle/:id', component: FeatureDetailComponent },
    ],
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class FeaturesRoutingModule {}
