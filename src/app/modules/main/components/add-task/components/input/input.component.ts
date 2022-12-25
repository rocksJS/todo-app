import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, ControlValueAccessor {
  public value = '';

  public control = new FormControl(null);

  constructor(private ngControl: NgControl, private cdR: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => this.onChange(value));
  }

  ngDoCheck(): void {
    if (this.ngControl.control.errors !== this.control.errors) {
      this.control.setErrors(this.ngControl.control.errors);
    }

    if (this.ngControl.control.dirty) {
      this.control.markAsDirty();
      this.cdR.markForCheck();
    } else {
      this.control.markAsPristine();
    }
  }

  public writeValue(value: string | null): void {
    this.control.setValue(value);
  }

  public registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onChange = (value: any): any => value;

  public onTouched = (): void => undefined;
}
