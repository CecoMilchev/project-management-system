import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    if (!localStorage.getItem("projects")) {
      this.projectService.getData().subscribe(result => {
        this.projects = result;
        localStorage.setItem("projects", JSON.stringify(result));
      }, error => console.error(error));
    } else {
      this.projects = JSON.parse(localStorage.getItem("projects") || '{}')
     }
  }
}
