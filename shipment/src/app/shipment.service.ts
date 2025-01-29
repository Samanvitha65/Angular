import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Shipment {
  id: any;
  sender: string;
  receiver: string;
  origin: string;
  destination: string;
  status: string;
  expectedDelivery: string;
}


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private url='https://miniature-space-couscous-4jjq66qv9ggw2j464-3000.app.github.dev/shipments';

  constructor(private http:HttpClient) { }


getShipments(): Observable<Shipment[]>{
  return this.http.get<Shipment[]>(this.url);
}
getShipmentById(id: string): Observable<Shipment>{
  return this.http.get<Shipment>(`${this.url}/${id}`);
}
addShipment(shipment:Shipment): Observable<Shipment>{
  return this.http.post<Shipment>(this.url,shipment);
}
updateShipment(shipment:Shipment,id:any): Observable<Shipment>{
  return this.http.put<Shipment>(`${this.url}/${id}`,shipment);
}
deleteShipment(id:any):Observable<any>{
  return this.http.delete<void>(`${this.url}/${id}`);

}
}


