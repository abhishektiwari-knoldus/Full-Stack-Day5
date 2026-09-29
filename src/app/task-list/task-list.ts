import { Component, inject } from '@angular/core';
import { TaskService } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private taskService = inject(TaskService);
  tasks = this.taskService.sortedTasks;

  toggle(id: number): void {
    this.taskService.toggle(id);
  }

  remove(id: number): void {
    this.taskService.remove(id);
  }
}
