import { Component, inject } from '@angular/core';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { TaskService } from './task';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private taskService = inject(TaskService);
  appTitle = 'Angular Task Manager';
  pendingCount = this.taskService.pendingCount;
}
