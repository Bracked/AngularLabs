import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDialogComponent } from './logo-dialog.component';

describe('LogoDialogComponent', () => {
  let component: LogoDialogComponent;
  let fixture: ComponentFixture<LogoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
