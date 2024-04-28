import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmNotesComponent } from './alarm-notes.component';

describe('AlarmNotesComponent', () => {
  let component: AlarmNotesComponent;
  let fixture: ComponentFixture<AlarmNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlarmNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
