import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {

  @Input('todo') todo: Todo;

  complete() {
    console.log('complete');
  }


}
