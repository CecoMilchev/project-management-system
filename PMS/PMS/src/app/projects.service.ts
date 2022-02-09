import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [];

  constructor(private http: HttpClient) {  }

  getProjects(): Project[] {
    if (!localStorage.getItem("projects")) {
      this.http.get<Project[]>('/api/projects').subscribe(result => {
        this.projects = result;
        localStorage.setItem("projects", JSON.stringify(result));
      }, error => console.error(error));
    } else {
      this.projects = JSON.parse(localStorage.getItem("projects") || '{}')
    }

    return this.projects;
  }

  getProject(name: string): Project {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    this.getProjects();
    const project = this.projects.find(p => p.name === name)!;
    return project;
  }
}
