import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskComponent } from './task/task.component';
import { LowerCaseUrlSerializer } from './app.urlserializer';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/:name', component: ProjectDetailsComponent },
  { path: 'projects/:name/tasks', component: TaskComponent },
  { path: 'tasks', component: TaskComponent }
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
