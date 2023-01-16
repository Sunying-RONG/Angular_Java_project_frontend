import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeComponent } from './calcule.component';

describe('CalculeComponent', () => {
  let component: CalculeComponent;
  let fixture: ComponentFixture<CalculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
