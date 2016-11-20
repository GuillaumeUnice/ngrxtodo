import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

import { TodoPageComponent } from './containers/todo-page/todo-page.component';
import { todoReducer } from './reducers/todo';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,

    TodoDetailComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ todos: todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
