import { TestBed } from '@angular/core/testing';
import { TaskService } from './task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('adds a task and counts it as pending', () => {
    service.add('Write README', 'High');
    expect(service.tasks().length).toBe(1);
    expect(service.pendingCount()).toBe(1);
  });

  it('toggling completes a task and moves it to the bottom', () => {
    service.add('A', 'Low');
    service.add('B', 'High');
    service.toggle(1);
    expect(service.pendingCount()).toBe(1);
    expect(service.sortedTasks()[1].title).toBe('A');
  });

  it('removes a task', () => {
    service.add('A', 'Low');
    service.remove(1);
    expect(service.tasks().length).toBe(0);
  });
});
