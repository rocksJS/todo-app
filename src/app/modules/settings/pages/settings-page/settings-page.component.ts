import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTemporaryTaskDelete, loadSettings } from 'src/app/ngrx/actions/settings.action';
import { settingsSelector } from 'src/app/ngrx/selectors/settings.selectors';
import { SettingsApiService } from 'src/app/shared/services/settings-api.service';

@Component({
  selector: 'todo-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent implements OnInit {
  public settings$: Observable<any>;

  constructor(private settingsApiService: SettingsApiService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadSettings());
    this.settings$ = this.store.select(settingsSelector);
    // this.store.select(settingsSelector).subscribe((x) => console.log(x));
  }

  public changeIsDeleteExpTodos(event: MatSelectionListChange) {
    this.store.dispatch(changeTemporaryTaskDelete({ setting: event.option.selected }));
  }
}
