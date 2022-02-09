import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
}
