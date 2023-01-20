import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap, Observable, take } from 'rxjs';
import { loadSettings } from 'src/app/ngrx/actions/settings.actions';
import { deleteSelectedTodos, loadTodos } from 'src/app/ngrx/actions/todo.actions';
import { spinnerSelector } from 'src/app/ngrx/selectors/core.selectors';
import { automaticDeleteSettingSelector } from 'src/app/ngrx/selectors/settings.selectors';
import { selectedTodosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { dayInMs } from 'src/app/shared/constants/expiration-time.consts';

@Component({
  selector: 'todo-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  requestsCount$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadSettings());
    this.store.dispatch(loadTodos());

    this.requestsCount$ = this.store.select(spinnerSelector);

    this.store
      .select(automaticDeleteSettingSelector)
      .pipe(
        filter((setting) => setting?.isSelected),
        take(1),
        mergeMap(() =>
          this.store.select(selectedTodosSelector).pipe(
            filter((todos) => !!todos.length),
            take(1),
            map((selectedTodos) => {
              selectedTodos = selectedTodos.filter((todo) => Date.now() - todo.creationDate > dayInMs);
              this.store.dispatch(deleteSelectedTodos({ todos: selectedTodos }));
            }),
          ),
        ),
      )
      .subscribe();
  }
}
