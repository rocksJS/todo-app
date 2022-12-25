import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { createTodo } from 'src/app/ngrx/actions/todo.actions';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialog, private store: Store) {}

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

    this.store.dispatch(createTodo({ todo: this.todoForm.getRawValue() }));
    this.dialogRef.closeAll();
  }
}
