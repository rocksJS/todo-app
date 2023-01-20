import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeAutomaticDeleteSelectionSetting } from 'src/app/ngrx/actions/settings.actions';
import { settingsSelector } from 'src/app/ngrx/selectors/settings.selectors';
import { ISetting } from 'src/app/shared/interfaces/settings.interface';

@Component({
  selector: 'todo-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent implements OnInit {
  public settingsList$: Observable<{ [key: string]: ISetting }>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.settingsList$ = this.store.select(settingsSelector);
  }

  public changeIsDeleteExpTodos(event: ISetting): void {
    this.store.dispatch(changeAutomaticDeleteSelectionSetting({ setting: event }));
  }
}
