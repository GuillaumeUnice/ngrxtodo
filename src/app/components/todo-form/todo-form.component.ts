import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() createTodo = new EventEmitter<string>();
  @Input() content: string = '';

}
