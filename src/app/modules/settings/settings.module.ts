import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { SelectionListComponent } from 'src/app/shared/components/selection-list/selection-list.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsRoutingModule } from './setting.routing.module';
@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsRoutingModule, MatListModule, SelectionListComponent],
})
export class SettingsModule {}
