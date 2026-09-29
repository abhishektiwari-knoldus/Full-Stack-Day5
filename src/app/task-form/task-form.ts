import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskService } from '../task';
import { Priority } from '../task.model';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskService = inject(TaskService);

  title = '';
  priority: Priority = 'Medium';
  priorities: Priority[] = ['Low', 'Medium', 'High'];

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    this.taskService.add(this.title.trim(), this.priority);
    this.clear(form);
  }

  clear(form: NgForm): void {
    form.resetForm({ title: '', priority: 'Medium' });
  }
}
