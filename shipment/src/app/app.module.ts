import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentlistComponent } from './shipmentlist/shipmentlist.component';
import { ShipmentformComponent } from './shipmentform/shipmentform.component';
import { ShipmentdetailsComponent } from './shipmentdetails/shipmentdetails.component';
import { ShipmentupdateComponent } from './shipmentupdate/shipmentupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentlistComponent,
    ShipmentformComponent,
    ShipmentdetailsComponent,
    ShipmentupdateComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
