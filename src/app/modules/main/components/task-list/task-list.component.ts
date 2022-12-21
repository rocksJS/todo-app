import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(private todosApiService: TodosApiService) {}

  ngOnInit(): void {
    this.todos$ = this.todosApiService.getTodos();
  }

  public isChanged(todo: any): void {
    this.todosApiService.updateTodoSelectionState(todo).subscribe();
  }
}
