import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerParentsComponent } from './customer-parents.component';

describe('CustomerParentsComponent', () => {
  let component: CustomerParentsComponent;
  let fixture: ComponentFixture<CustomerParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
