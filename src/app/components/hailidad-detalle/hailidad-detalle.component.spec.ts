import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HailidadDetalleComponent } from './hailidad-detalle.component';

describe('HailidadDetalleComponent', () => {
  let component: HailidadDetalleComponent;
  let fixture: ComponentFixture<HailidadDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HailidadDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HailidadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
