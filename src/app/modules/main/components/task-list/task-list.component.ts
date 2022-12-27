import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos, updateTodo } from 'src/app/ngrx/actions/todo.actions';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { TodosApiService } from 'src/app/shared/services/todos-api.service';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(private store: Store, private todosApiService: TodosApiService) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todos$ = this.store.select(todosSelector);
    // this.todosApiService.deleteExpiredTodos().subscribe();
  }

  public changeTodoSelection(event: MatSelectionListChange) {
    this.store.dispatch(updateTodo({ todo: event.option.value }));
  }
}
