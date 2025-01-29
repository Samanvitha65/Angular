import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipmentupdate',
  templateUrl: './shipmentupdate.component.html',
  styleUrls: ['./shipmentupdate.component.css']
})
export class ShipmentupdateComponent {
  shipmentForm:FormGroup;
  shipmentId: any;
  constructor(private fb: FormBuilder,
    private shipmentService: ShipmentService,
    private router:Router
  ){
    this.shipmentForm=this.fb.group({
      id: ['', Validators.required],
      sender: ['',Validators.required],
      receiver: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      status: ['', Validators.required],
      expectedDelivery: ['',[Validators.required, Validators.pattern("/^\d{4}-\d{2}-\d{2}$/")]]
    });
  }
  updateShipment(): void{
    if(this.shipmentForm.valid){
      this.shipmentService.updateShipment(this.shipmentForm.value,this.shipmentId).subscribe(()=>
      this.router.navigate(['/']));
    }
  }

}
