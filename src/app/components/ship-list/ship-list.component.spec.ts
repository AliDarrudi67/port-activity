import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipListComponent } from './ship-list.component';

describe('ShipListComponent', () => {
  let component: ShipListComponent;
  let fixture: ComponentFixture<ShipListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipListComponent]
    });
    fixture = TestBed.createComponent(ShipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
