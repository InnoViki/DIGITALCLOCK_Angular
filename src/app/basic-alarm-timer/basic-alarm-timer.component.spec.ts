import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAlarmTimerComponent } from './basic-alarm-timer.component';

describe('BasicAlarmTimerComponent', () => {
  let component: BasicAlarmTimerComponent;
  let fixture: ComponentFixture<BasicAlarmTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAlarmTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAlarmTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
