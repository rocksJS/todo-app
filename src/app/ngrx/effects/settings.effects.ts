import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ISetting } from 'src/app/shared/interfaces/settings.interface';
import { SettingsApiService } from 'src/app/shared/services/api/settings-api.service';
import {
  changeAutomaticDeleteSelectionSetting,
  changeAutomaticDeleteSelectionSettingFailure,
  changeAutomaticDeleteSelectionSettingSuccess,
  loadSettings,
  loadSettingsFailure,
  loadSettingsSuccess,
} from '../actions/settings.actions';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions, private settingsApiService: SettingsApiService) {}

  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSettings),
      switchMap(() =>
        this.settingsApiService.getSettings().pipe(
          map((settingsList: any) => {
            return loadSettingsSuccess({ settingsList });
          }),
          catchError((error) => of(loadSettingsFailure({ error }))),
        ),
      ),
    ),
  );

  changeAutomaticDeleteSelectionSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeAutomaticDeleteSelectionSetting),
      switchMap((action) =>
        this.settingsApiService.changeIsDeleteExpiredTodos(action.setting).pipe(
          map((setting: ISetting) => {
            setting = action.setting;
            return changeAutomaticDeleteSelectionSettingSuccess({ setting });
          }),
          catchError((error) => of(changeAutomaticDeleteSelectionSettingFailure({ error }))),
        ),
      ),
    ),
  );
}
