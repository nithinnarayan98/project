import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltcompComponent } from './deltcomp.component';

describe('DeltcompComponent', () => {
  let component: DeltcompComponent;
  let fixture: ComponentFixture<DeltcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
