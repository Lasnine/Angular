import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoCardComponent } from './mercado-card.component';

describe('MercadoCardComponent', () => {
  let component: MercadoCardComponent;
  let fixture: ComponentFixture<MercadoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadoCardComponent]
    });
    fixture = TestBed.createComponent(MercadoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
