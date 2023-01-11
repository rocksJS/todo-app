import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSelectionListComponent } from './tasks-selection-list.component';

describe('TasksSelectionListComponent', () => {
  let component: TasksSelectionListComponent;
  let fixture: ComponentFixture<TasksSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksSelectionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
