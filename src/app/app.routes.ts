import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicAlarmTimerComponent } from './basic-alarm-timer/basic-alarm-timer.component';
import { AlarmNotesComponent } from './alarm-notes/alarm-notes.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [

{path:"dashboard", component:DashboardComponent},
{path:"basic-alarm-timer",component:BasicAlarmTimerComponent},
{path:"alarm-notes",component:AlarmNotesComponent},
{path:"login",component:LoginComponent},
{path:"notes",component:NotesComponent}

];
