import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { loadSettings } from 'src/app/ngrx/actions/settings.action';
import { deleteExpiredTodos, loadTodos } from 'src/app/ngrx/actions/todo.actions';
import { settingsIsDeleteExpiredTodos } from 'src/app/ngrx/selectors/settings.selectors';

@Component({
  selector: 'todo-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store, private cdR: ChangeDetectorRef) {}

  ngOnInit() {
    this.store.dispatch(loadSettings());
    this.store.dispatch(loadTodos());

    this.store
      .select(settingsIsDeleteExpiredTodos)
      .pipe(
        map((isDelete) => {
          if (isDelete) {
            return this.store.dispatch(deleteExpiredTodos());
          }
        }),
      )
      .subscribe();
  }
}
