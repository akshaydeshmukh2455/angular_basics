import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComComponent } from './todo-list-com/todo-list-com.component';



@NgModule({
  declarations: [
    TodoListComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TodoListComComponent
  ]
})
export class TodoListModule { }
