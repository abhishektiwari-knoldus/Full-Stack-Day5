export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: number;
  title: string;
  priority: Priority;
  completed: boolean;
}
