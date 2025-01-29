import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShipmentService } from '../shipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipmentform',
  templateUrl: './shipmentform.component.html',
  styleUrls: ['./shipmentform.component.css']
})
export class ShipmentformComponent {
  shipmentForm:FormGroup;
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
      expectedDelivery: ['',Validators.required]//, Validators.pattern("/^\d{4}-\d{2}-\d{2}$/")]]
    });
  }
  addShipment(): void{
    this.shipmentService.addShipment(this.shipmentForm.value).subscribe(() =>
    {
      this.router.navigate(['/']);
    });
  }
  }


