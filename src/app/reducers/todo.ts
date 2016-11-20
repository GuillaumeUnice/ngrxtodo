import { Todo } from '../models/todo';
import * as todo from '../actions/todo';
import { ActionReducer } from '@ngrx/store';
import { Observable } from 'rxjs';
import '@ngrx/core/add/operator/select';

export interface State {
  todos: Todo[];
};

const initialState: State = {
  todos: []
};

export const todoReducer: ActionReducer<State> = (state = initialState, action: todo.Actions): State => {
  switch (action.type) {
    case todo.ActionTypes.CREATE: {
      
      const newTodo: Todo = action.payload;
      
      if((state.todos.length === 0)
        || (state.todos.map(function(todo) {return todo.content; }).indexOf(newTodo.content) === -1)) {
        return {
       	  todos: [ ...state.todos, newTodo ]
        };
      }
      
      return state;
    }
    default: {
      return state;
    }
  }
}
