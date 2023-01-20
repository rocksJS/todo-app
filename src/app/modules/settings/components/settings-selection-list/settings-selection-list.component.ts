import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { ISetting } from 'src/app/shared/interfaces/settings.interface';
@Component({
  selector: 'todo-settings-selection-list',
  templateUrl: './settings-selection-list.component.html',
  styleUrls: ['./settings-selection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsSelectionListComponent {
  @Input() public settingsList: { [key: string]: ISetting };

  @Output() public settingSelectionChangeEmitter = new EventEmitter();

  public changeSettingSelection(event: MatSelectionListChange): void {
    const newSetting = { ...event.option.value };
    newSetting.isSelected = !newSetting.isSelected;

    this.settingSelectionChangeEmitter.emit(newSetting);
  }
}
