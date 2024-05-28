import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServappComponent } from './servapp.component';

describe('ServappComponent', () => {
  let component: ServappComponent;
  let fixture: ComponentFixture<ServappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServappComponent]
    });
    fixture = TestBed.createComponent(ServappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
