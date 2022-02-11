import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project.interface';
import { ProjectTask } from '../../interfaces/project-task.interface';
import { ProjectsService } from '../projects.service';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TaskDetailsComponent implements AdComponent {
  data: any;//implements OnInit
  //projectTask: ProjectTask | undefined;

  //constructor(
  //  private route: ActivatedRoute,
  //  private projectService: ProjectsService
  //) { }

  //ngOnInit(): void {
  //  this.getProjectTask();
  //}

  //getProjectTask(): void {
  //  const id = this.route.snapshot.paramMap.get('id');
  //  if (!localStorage.getItem("projects")) {
  //    this.projectService.getData().subscribe(result => {
  //      this.projectTask = this.extractTasks(result).find(task => task.id == +id!);

  //      localStorage.setItem("projects", JSON.stringify(result));
  //    }, error => console.error(error));
  //  } else {
  //    const projects = JSON.parse(localStorage.getItem("projects") || '{}');
  //    this.projectTask = this.extractTasks(projects).find(task => task.id == +id!);
  //  }
  //}

  //extractTasks(projects: Project[]): ProjectTask[] {
  //  const tasks = projects.reduce((acc, project) => {
  //    project.tasks.map(task => acc.push(task));
  //    return acc;
  //  }, [] as ProjectTask[]);

  //  return tasks;
  //}
}
