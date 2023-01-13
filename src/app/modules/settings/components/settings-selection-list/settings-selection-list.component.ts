import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { ISettings } from 'src/app/shared/interfaces/settings.interface';

@Component({
  selector: 'todo-settings-selection-list',
  templateUrl: './settings-selection-list.component.html',
  styleUrls: ['./settings-selection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsSelectionListComponent {
  @Input() public settings: ISettings[];

  @Output() public settingSelectionChangeEmitter = new EventEmitter();

  public changeSettingSelection(event: MatSelectionListChange): void {
    this.settingSelectionChangeEmitter.emit(event.option.selected);
  }
}
