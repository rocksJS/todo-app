import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
