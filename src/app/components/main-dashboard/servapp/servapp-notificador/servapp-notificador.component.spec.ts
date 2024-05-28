import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServappNotificadorComponent } from './servapp-notificador.component';

describe('ServappNotificadorComponent', () => {
  let component: ServappNotificadorComponent;
  let fixture: ComponentFixture<ServappNotificadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServappNotificadorComponent]
    });
    fixture = TestBed.createComponent(ServappNotificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
