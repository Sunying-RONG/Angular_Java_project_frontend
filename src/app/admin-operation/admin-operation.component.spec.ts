import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOperationComponent } from './admin-operation.component';

describe('AdminOperationComponent', () => {
  let component: AdminOperationComponent;
  let fixture: ComponentFixture<AdminOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
