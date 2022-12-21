import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos } from 'src/app/ngrx/actions/todo.actions';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
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

  constructor(private todosApiService: TodosApiService, private store: Store, private cdR: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.todos$ = this.todosApiService.getTodos();
    this.todos$ = this.store.select(todosSelector);
    this.store.dispatch(loadTodos());
    this.cdR.markForCheck();
  }

  public isChanged(todo: any): void {
    console.log(todo);
    this.todosApiService.updateTodoSelectionState(todo).subscribe();
  }
}
