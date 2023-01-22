import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonumentComponent } from './edit-monument.component';

describe('EditMonumentComponent', () => {
  let component: EditMonumentComponent;
  let fixture: ComponentFixture<EditMonumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMonumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMonumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
