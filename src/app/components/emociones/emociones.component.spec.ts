import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmocionesComponent } from './emociones.component';

describe('EmocionesComponent', () => {
  let component: EmocionesComponent;
  let fixture: ComponentFixture<EmocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmocionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
