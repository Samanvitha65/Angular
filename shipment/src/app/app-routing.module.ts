import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentlistComponent } from './shipmentlist/shipmentlist.component';
import { ShipmentformComponent } from './shipmentform/shipmentform.component';
import { ShipmentdetailsComponent } from './shipmentdetails/shipmentdetails.component';
import { ShipmentupdateComponent } from './shipmentupdate/shipmentupdate.component';

const routes: Routes = [
  {path: '', component:ShipmentlistComponent},
  {path:"add", component:ShipmentformComponent},
  {path: "edit/:id", component:ShipmentupdateComponent},
  {path: "view/:id",component:ShipmentdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
