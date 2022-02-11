export interface ProjectTask {
  id: number;
  type: Type;
  title: string;
  description: string;
  assignee: string;
  priority: Priority;
  status: Status;
  estimate: number;
  createdAt: Date;
}

export enum Status {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  ReadyforTest = 'Ready for Test',
  Done = 'Done'
}

export enum Priority {
  Low,
  Medium,
  High,
  Critical
}

export enum Type {
  Bug,
  Story
}
