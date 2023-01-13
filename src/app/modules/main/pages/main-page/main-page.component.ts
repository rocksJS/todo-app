import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSettings } from 'src/app/ngrx/actions/settings.action';
import { loadTodos } from 'src/app/ngrx/actions/todo.actions';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'todo-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  private selectedTodos: ITodo[];

  constructor(private store: Store, private cdR: ChangeDetectorRef) {}

  ngOnInit() {
    this.store.dispatch(loadSettings());
    this.store.dispatch(loadTodos());
  }
}
