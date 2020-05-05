import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo = null;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService.retrieveTodo('in28minutes', this.id)
        .subscribe(
          Response => {
            return this.todo = Response;
          }
        )
    } else {
      this.todo = new Todo(null, '', false, null);
      return this.todo
    }

  }

  saveTodo() {
    if (this.id === -1) {
      //create
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        respone => {
          this.router.navigate(['todos']);
        }
      )
    } else {
      //update
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        respone => {
          this.router.navigate(['todos']);
        }
      )
    }

  }

}
