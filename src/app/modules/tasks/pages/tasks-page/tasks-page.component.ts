import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateTodo } from 'src/app/ngrx/actions/todo.actions';
import { todosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'todo-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(todosSelector);
  }

  public changeTodoSelection(event: ITodo): void {
    this.store.dispatch(updateTodo({ todo: event }));
  }
}
