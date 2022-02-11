import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, ViewChild, Type, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectTask } from '../../interfaces/project-task.interface';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-popup-preview',
  templateUrl: 'popup-preview.component.html',
  styleUrls: ['popup-preview.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PopupPreviewComponent {
  projectTask: ProjectTask | undefined;

  constructor(
    public modal: NgbActiveModal) {
  }

  closeModal() {
    this.modal.close()
  }
}
