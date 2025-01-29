import { Component, OnInit } from '@angular/core';
import { Shipment, ShipmentService } from '../shipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipmentlist',
  templateUrl: './shipmentlist.component.html',
  styleUrls: ['./shipmentlist.component.css']
})
export class ShipmentlistComponent implements OnInit {
  shipments:Shipment[]=[];
  filteredShipments:any[]=[];
  searchText:string='';
  sortBy:string='';
  //sortSend: string='sender';
  isAscending:boolean=true;
  constructor(private shipmentService:ShipmentService,private router: Router){}
  ngOnInit(): void {
    this.shipmentService.getShipments().subscribe((data) => {
      this.shipments=data;
      this.filteredShipments=[...this.shipments];
    });
   
  }
  filterShipment():void{
    if(this.searchText){
      this.filteredShipments=this.shipments.filter((shipment) => 
        shipment.destination.toLowerCase().includes(this.searchText.toLowerCase())||
      shipment.id.toLowerCase().includes(this.searchText.toLowerCase())
        
      );
    }else{
      this.filteredShipments=[...this.shipments];
    }
  
  }
  sortShipments(): void{
    this.filteredShipments.sort((a, b) => {
      if(a[this.sortBy] < b[this.sortBy]){
        return this.isAscending? -1:1;

      }else if(a[this.sortBy] > b[this.sortBy]){
        return this.isAscending? 1:-1;
      }
      return 0;
    });
   
  }
  toggleSortOrder(): void {
    this.isAscending = !this.isAscending;
    this.sortShipments();
    }
  deleteShipment(id:any): void{
    this.shipmentService.deleteShipment(id).subscribe(()=>{
      this.shipments=this.shipments.filter((shipment) => shipment.id !== id)});
    }
    editShipment(id:any): void{
      this.router.navigate([`edit/${id}`]);
    }
    viewShipment(id:any):void{
      this.router.navigate([`view/${id}`])
    }

    sortBySender(): void{
      this.filteredShipments.sort((a,b) => {

      
          return a.sender.localeCompare(b.sender);
        
         
      });
    }
    
  }


