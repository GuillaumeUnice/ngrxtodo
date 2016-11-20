import {Injectable} from '@angular/core';
import { Action } from '@ngrx/store';

import { Todo } from '../models/todo';

@Injectable()
export class TodoActions {
    
  static CREATE_TODO: string = '[Todo] Create Todo';
  static UPDATE_TODO: string = '[Todo] Update Todo';
  static REMOVE_TODO: string = '[Todo] Remove Todo';

    createTodo(todo : Todo): Action {
        return {
            type: TodoActions.CREATE_TODO,
            payload: todo
        };
    }

    updateTodo(todo: Todo): Action {
        return {
            type: TodoActions.UPDATE_TODO,
            payload: todo
        };
    }


    removeTodo(todo: Todo): Action {
        return {
            type: TodoActions.REMOVE_TODO,
            payload: todo
        };
    }
}


export const ActionTypes = {
  CREATE: '[Todo] Create Todo',
  UPDATE: '[Todo] Update Todo',
  REMOVE: '[Todo] Remove Todo',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 * 
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: Todo) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: Todo) { }
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: Todo) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = CreateAction
  | UpdateAction
  | RemoveAction
