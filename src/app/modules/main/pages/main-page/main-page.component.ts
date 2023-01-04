import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSettings } from 'src/app/ngrx/actions/settings.action';
import { deleteExpiredTodos, loadTodos } from 'src/app/ngrx/actions/todo.actions';
import { settingsIsDeleteExpiredTasks } from 'src/app/ngrx/selectors/settings.selectors';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { take } from 'rxjs';

@Component({
  selector: 'todo-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadSettings());
    this.store.dispatch(loadTodos());

    this.store.select(settingsIsDeleteExpiredTasks).subscribe((isExpired) => {
      if (isExpired === true) {
        this.store.dispatch(deleteExpiredTodos());
      }
    });
  }
}
