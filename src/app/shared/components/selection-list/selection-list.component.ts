import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule, MatSelectionListChange } from '@angular/material';
import { Observable } from 'rxjs';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'todo-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatListModule, CommonModule],
})
export class SelectionListComponent {
  @Input() public options$: Observable<ITodo[]>;

  @Output() public optionEmitter = new EventEmitter();

  public changeSelection(event: MatSelectionListChange): void {
    this.optionEmitter.emit(event);
  }
}
