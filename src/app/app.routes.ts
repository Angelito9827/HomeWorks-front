import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';

export const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch: 'full'},
  {path: "home", component:HomeComponent},
  {path: "task", component:TaskListComponent},
  {path: "profile", component:ProfileDetailsComponent},
];
