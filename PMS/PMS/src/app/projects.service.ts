import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ProjectTask } from '../interfaces/project-task.interface';
import { Project } from '../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects: Project[] = [];

  constructor(private http: HttpClient) {  }

  getData(): Observable<Project[]>{
    return this.http.get<Project[]>('/api/projects');
  }

  updateTask(updatedTask: ProjectTask): void {
    const projects = JSON.parse(localStorage.getItem("projects") || '');

    const updated = projects.map((proj: Project)=> {
      const tasks = proj.tasks.map(task => {
        if (task.id == updatedTask.id) {
          return updatedTask;
        }

        return task;
      });

      proj.tasks = tasks;

      return proj;
    });

    localStorage.setItem("projects", JSON.stringify(updated));
  }
}
