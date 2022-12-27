import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { SettingsApiService } from 'src/app/shared/services/settings-api.service';
import {
  changeTemporaryTaskDelete,
  changeTemporaryTaskDeleteFailure,
  changeTemporaryTaskDeleteSuccess,
  loadSettings,
  loadSettingsFailure,
  loadSettingsSuccess,
} from '../actions/settings.action';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions, private settingsApiService: SettingsApiService) {}

  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSettings),
      switchMap(() =>
        this.settingsApiService.getSettings().pipe(
          map((settings: any) => loadSettingsSuccess({ settings })),
          catchError((error) => of(loadSettingsFailure({ error }))),
        ),
      ),
    ),
  );

  updateTemporaryClearExpiredTaskState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeTemporaryTaskDelete),
      switchMap((action) => {
        return this.settingsApiService.changeIsDeleteExpiredTodos(action.setting).pipe(
          switchMap(() => [changeTemporaryTaskDeleteSuccess(), loadSettings()]),
          catchError((error) => of(changeTemporaryTaskDeleteFailure({ error }))),
        );
      }),
    ),
  );
}
