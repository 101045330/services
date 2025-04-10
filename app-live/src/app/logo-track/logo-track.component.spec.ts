import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTrackComponent } from './logo-track.component';

describe('LogoTrackComponent', () => {
  let component: LogoTrackComponent;
  let fixture: ComponentFixture<LogoTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
