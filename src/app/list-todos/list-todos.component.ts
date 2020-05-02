import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('piyush').subscribe(
      Response => {
        console.log(Response);
        this.todos = Response;
      }
    );
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('in@28minutes', id).subscribe(
      Response => {
        console.log(Response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos();
      },
      Error => {
        this.message = `Unable to Delete Todo ${id} . Please contact admin!`
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

}
