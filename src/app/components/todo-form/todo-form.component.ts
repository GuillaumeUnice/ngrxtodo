import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Input() content: string = '';

  addTask(task) {
    console.log(task);
  }
}
