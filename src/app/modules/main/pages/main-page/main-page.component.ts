import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSettings } from 'src/app/ngrx/actions/settings.action';
import { loadTodos } from 'src/app/ngrx/actions/todo.actions';

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
  }
}
