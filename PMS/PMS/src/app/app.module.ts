import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    //RouterModule.forRoot([
    //  { path: '', component: AppComponent },
    //  { path: 'projects', component: ProjectComponent },
    //])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
