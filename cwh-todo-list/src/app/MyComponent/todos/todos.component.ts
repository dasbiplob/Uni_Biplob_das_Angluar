import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  "localItems":string;
  "todos": Todo[];
  constructor(){
    this.localItems = JSON.parse(localStorage.getItem("todos") || '{}');
    if(this.localItems==null){

      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItems);
    }
        // {
        //   sno:1,
        //   title: "This is Title1",
        //   desc: "Description",
        //   active: true
        // },
        // {
        //   sno:2,
        //   title: "This is Title2",
        //   desc: "Description",
        //   active: true
        // },
        // {
        //   sno:3,
        //   title: "This is Title3",
        //   desc: "Description",
        //   active: true
        // },
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.slice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
