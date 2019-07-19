import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DesignsComponent } from './designs/designs.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DesignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
