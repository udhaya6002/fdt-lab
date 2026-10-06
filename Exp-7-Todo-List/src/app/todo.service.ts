import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Buy groceries',
      completed: false
    },
    {
      id: 2,
      title: 'Call the plumber',
      completed: false
    },
    {
      id: 3,
      title: 'Go for a walk',
      completed: false
    }
  ];

  private nextId: number = 4;

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodoCompleted(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
