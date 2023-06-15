import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-com',
  templateUrl: './todo-list-com.component.html',
  styleUrls: ['./todo-list-com.component.css']
})
export class TodoListComComponent {
todoList:any[]=[];

addTask(item:string)
{
  this.todoList.push({id:this.todoList.length,name:item})
  console.warn(this.todoList)
}

removeTask(id:number)
{
  console.warn(id)
  this.todoList=this.todoList.filter(item => item.id !==id)
}

}
