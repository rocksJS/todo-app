import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsRoutingModule } from './setting.routing.module';
@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsRoutingModule, MatListModule],
})
export class SettingsModule {}
