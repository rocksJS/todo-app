import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTemporaryTaskDelete } from 'src/app/ngrx/actions/settings.action';
import { settingsSelector } from 'src/app/ngrx/selectors/settings.selectors';

@Component({
  selector: 'todo-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent implements OnInit {
  public settings$: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.settings$ = this.store.select(settingsSelector);
  }

  public changeIsDeleteExpTodos(event: MatSelectionListChange) {
    console.log(event.option);
    this.store.dispatch(changeTemporaryTaskDelete({ setting: event.option.selected }));
  }
}
