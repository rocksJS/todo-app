import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectedTodosSelector } from 'src/app/ngrx/selectors/todo.selectors';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private store: Store) {}

  public getSelectedTodos(): Observable<ITodo[]> {
    return this.store.select(selectedTodosSelector);
  }

  public getExpiredSelectedTodos(): Observable<any> {
    return this.store
      .select(selectedTodosSelector)
      .pipe(map((todos) => todos.filter((todo: ITodo) => (Date.now() - todo.creationDate > 86400000 ? true : false))));
  }
}
