import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectTask } from '../../interfaces/project-task.interface';
import { Project } from '../../interfaces/project.interface';
import { ModalService } from '../modal.service';
import { PopupEditComponent } from '../popup-edit/popup-edit.component';
import { PopupPreviewComponent } from '../popup-preview/popup-preview.component';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TaskComponent implements OnInit {
  tasks: ProjectTask[] = [];
  projectTask: ProjectTask | undefined;
  modalReference: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  openModal(id: string) {
    const ref = this.modalService.open(PopupPreviewComponent);
    this.modalReference = ref;
    this.getProjectTask(+id);
    ref.componentInstance.projectTask = this.projectTask;
  }

  openEditModal(id: string) {
    const ref = this.modalService.open(PopupEditComponent);
    this.modalReference = ref;
    this.getProjectTask(+id);
    ref.componentInstance.projectTask = this.projectTask;
  }

  closeModal() {
    this.modalReference.close();
  }

  getTasks(): void {
    if (!localStorage.getItem("projects")) {
      this.projectService.getData().subscribe(result => {
        this.tasks = this.extractTasks(result);

        localStorage.setItem("projects", JSON.stringify(result));
      }, error => console.error(error));
    } else {
      const projects = JSON.parse(localStorage.getItem("projects") || '{}');
      this.tasks = this.extractTasks(projects);
    }
  }

  extractTasks(projects: Project[]): ProjectTask[] {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);

    const tasks = projects.reduce((acc, project) => {
      if (name) {
        if (name == project.name.toLowerCase()) {
          project.tasks.map(task => acc.push(task));
        }
      } else {
        project.tasks.map(task => acc.push(task));
      }

      return acc;
    }, [] as ProjectTask[]);

    return tasks;
  }

  getProjectTask(id: number): void {
    if (!localStorage.getItem("projects")) {
      this.projectService.getData().subscribe(result => {
        this.projectTask = this.extractTasks(result).find(task => task.id == +id!);

        localStorage.setItem("projects", JSON.stringify(result));
      }, error => console.error(error));
    } else {
      const projects = JSON.parse(localStorage.getItem("projects") || '{}');
      this.projectTask = this.extractTasks(projects).find(task => task.id == +id!);
    }
  }
}
