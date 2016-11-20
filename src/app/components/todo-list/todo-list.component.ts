import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() todos: Todo[];

}
