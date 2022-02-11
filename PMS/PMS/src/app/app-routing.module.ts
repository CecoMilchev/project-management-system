import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskComponent } from './task/task.component';
import { LowerCaseUrlSerializer } from './app.urlserializer';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/:name', component: ProjectDetailsComponent },
  { path: 'projects/:name/tasks', component: TaskComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'projects/:name/tasks/:id', component: TaskDetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: UrlSerializer,
    useClass: LowerCaseUrlSerializer
  }]
})
export class AppRoutingModule { }
