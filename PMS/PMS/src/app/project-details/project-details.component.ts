import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.project = this.projectService.getProject(name || '');
  }

  //goBack(): void {
  //  this.location.back();
  //}
}
