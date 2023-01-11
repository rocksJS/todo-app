import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSelectionListComponent } from './settings-selection-list.component';

describe('SettingsSelectionListComponent', () => {
  let component: SettingsSelectionListComponent;
  let fixture: ComponentFixture<SettingsSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsSelectionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
