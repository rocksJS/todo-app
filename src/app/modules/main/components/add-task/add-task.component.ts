import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(private todoApiService: TodosApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      isSelected: [false],
      expDate: [Date.now()],
    });
  }

  public todoSubmit(): void {
    if (this.todoForm.invalid) {
      markAllAsDirty(this.todoForm);
      return;
    }
    this.todoApiService.createTodo(this.todoForm.getRawValue()).subscribe();
  }
}
