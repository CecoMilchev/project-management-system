import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, ViewChild, Type, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectTask } from '../../interfaces/project-task.interface';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-popup-edit',
  templateUrl: 'popup-edit.component.html',
  styleUrls: ['popup-edit.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PopupEditComponent implements OnInit {
  projectTask: ProjectTask | undefined;
  form: FormGroup | any;
  projectService: ProjectsService;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public modal: NgbActiveModal,
    private projectsService: ProjectsService
  ) {
    this.projectService = projectsService;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      estimate: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', Validators.required],
      createdAt: ['', Validators.required]
    });

    this.form.patchValue(this.projectTask)
  }

  onSubmit() {
    this.projectsService.updateTask(this.form.value);
    location.reload();
  }

  closeModal() {
    this.modal.close()
  }
}
