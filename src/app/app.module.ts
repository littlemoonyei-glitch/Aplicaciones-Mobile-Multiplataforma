import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, registerElement } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { MinCharactersDirective } from './shared/min-characters.directive';

// El plugin se registra como elemento Angular antes de renderizar el ListView.
registerElement('PullToRefresh', () => require('nativescript-pulltorefresh').PullToRefresh);

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forRoot([
      { path: '', redirectTo: '/catalog', pathMatch: 'full' },
      { path: 'catalog', component: CatalogComponent },
      { path: 'detail/:id', component: DetailComponent }
    ])
  ],
  declarations: [AppComponent, CatalogComponent, DetailComponent, MinCharactersDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
