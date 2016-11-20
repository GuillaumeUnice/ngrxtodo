import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as todo from '../../actions/todo';

interface AppState {
  todos: Todo[];
}

@Component({
  selector: 'todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = <Observable<Todo[]>>store.select('todos').select('todos');
  }

  createTodo(content: string){
    this.store.dispatch(new todo.CreateAction({
      content: content,
      isCompleted: false
    }));
  }
  
}
