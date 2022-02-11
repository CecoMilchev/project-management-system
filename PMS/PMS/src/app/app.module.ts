import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskComponent } from './task/task.component';
import { TaskDirective } from './project-task-detail.directive';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PopupPreviewComponent } from './popup-preview/popup-preview.component';
import { PopupEditComponent } from './popup-edit/popup-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    TaskComponent,
    TaskDirective,
    PopupPreviewComponent,
    PopupEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
    //RouterModule.forRoot([
    //  { path: '', component: AppComponent },
    //  { path: 'projects', component: ProjectComponent },
    //])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
