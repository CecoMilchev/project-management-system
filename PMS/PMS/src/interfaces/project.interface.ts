import { ProjectTask } from "./project-task.interface";

export interface Project {
  name: string;
  tasks: ProjectTask[];
}
