import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { createTodo } from 'src/app/ngrx/actions/todo.actions';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'todo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [InputComponent, CommonModule, ReactiveFormsModule, MatButtonModule],
})
export class AddTaskComponent implements OnInit {
  public titleControl: FormControl;

  constructor(private dialogRef: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.titleControl = new FormControl('', [Validators.required]);
  }

  public todoSubmit(): void {
    if (this.titleControl.invalid) {
      this.titleControl.markAsDirty();
      return;
    }

    let newTodo: ITodo = {
      title: this.titleControl.getRawValue(),
      isSelected: false,
      creationDate: Date.now(),
    };

    this.store.dispatch(createTodo({ todo: newTodo }));
    this.dialogRef.closeAll();
  }
}
