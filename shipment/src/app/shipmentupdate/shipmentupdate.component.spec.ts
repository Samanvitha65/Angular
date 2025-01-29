import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentupdateComponent } from './shipmentupdate.component';

describe('ShipmentupdateComponent', () => {
  let component: ShipmentupdateComponent;
  let fixture: ComponentFixture<ShipmentupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
