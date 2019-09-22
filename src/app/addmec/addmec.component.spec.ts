import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmecComponent } from './addmec.component';

describe('AddmecComponent', () => {
  let component: AddmecComponent;
  let fixture: ComponentFixture<AddmecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
