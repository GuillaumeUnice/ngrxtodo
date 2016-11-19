import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  ngOnInit() {
    this.todos.push({
      content: 'Task number 1',
      isCompleted: false
    });
    this.todos.push({
      content: 'Task number 2',
      isCompleted: false
    });
  }
}
