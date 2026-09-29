import { Injectable, computed, signal } from '@angular/core';
import { Priority, Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private nextId = 1;
  readonly tasks = signal<Task[]>([]);

  // Live count of pending tasks
  readonly pendingCount = computed(
    () => this.tasks().filter((t) => !t.completed).length
  );

  // Completed tasks are moved to the bottom (Array.sort is stable)
  readonly sortedTasks = computed(() =>
    [...this.tasks()].sort((a, b) => Number(a.completed) - Number(b.completed))
  );

  add(title: string, priority: Priority): void {
    this.tasks.update((list) => [
      ...list,
      { id: this.nextId++, title, priority, completed: false },
    ]);
  }

  toggle(id: number): void {
    this.tasks.update((list) =>
      list.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  remove(id: number): void {
    this.tasks.update((list) => list.filter((t) => t.id !== id));
  }
}
