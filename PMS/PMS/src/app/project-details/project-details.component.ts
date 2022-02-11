import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    if (!localStorage.getItem("projects")) {
      this.projectService.getData().subscribe(result => {
        this.project = result.find(p => p.name === name)!;
        localStorage.setItem("projects", JSON.stringify(result));
      }, error => console.error(error));
    } else {
      const projects: Project[] = JSON.parse(localStorage.getItem("projects") || '{}');
      this.project = projects.find(p => p.name.toLowerCase() === name)!;
    }
  }
}
