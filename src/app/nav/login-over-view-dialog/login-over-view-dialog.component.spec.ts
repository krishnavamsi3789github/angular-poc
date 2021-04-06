import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOverViewDialogComponent } from './login-over-view-dialog.component';

describe('LoginOverViewDialogComponent', () => {
  let component: LoginOverViewDialogComponent;
  let fixture: ComponentFixture<LoginOverViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOverViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOverViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
