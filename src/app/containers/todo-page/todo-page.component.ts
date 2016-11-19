import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

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
  // todos$: Observable<Todo[]>;

  // constructor(store: Store<AppState>) {
  //   this.todos$ = store.select('todos');
  // }

}
