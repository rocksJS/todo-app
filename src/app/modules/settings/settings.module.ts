import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { SettingsSelectionListComponent } from './components/settings-selection-list/settings-selection-list.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsRoutingModule } from './setting.routing.module';
@NgModule({
  declarations: [SettingsPageComponent, SettingsSelectionListComponent],
  imports: [CommonModule, SettingsRoutingModule, MatListModule],
})
export class SettingsModule {}
