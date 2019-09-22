import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltmecComponent } from './deltmec.component';

describe('DeltmecComponent', () => {
  let component: DeltmecComponent;
  let fixture: ComponentFixture<DeltmecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltmecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltmecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
