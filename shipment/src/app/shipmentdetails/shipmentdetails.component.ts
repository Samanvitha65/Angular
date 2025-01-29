import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { ShipmentService } from '../shipment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shipmentdetails',
  templateUrl: './shipmentdetails.component.html',
  styleUrls: ['./shipmentdetails.component.css']
})
export class ShipmentdetailsComponent implements OnInit {
  shipment:any;
  shipmentId:any;
  constructor(
    private shipmentService: ShipmentService,
    private router: Router,
    private route: ActivatedRoute

  ){}
  ngOnInit(): void {
    this.shipmentId=this.route.snapshot.paramMap.get('id')!;
    this.shipmentService.getShipmentById(this.shipmentId).subscribe((res)=>{
      this.shipment=res;
    });
  }

  go(): void {
    this.router.navigate([`/`]);
  

}
}
