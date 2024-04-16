import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEndPageComponent } from './shift-end-page.component';

describe('ShiftEndPageComponent', () => {
  let component: ShiftEndPageComponent;
  let fixture: ComponentFixture<ShiftEndPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftEndPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftEndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
