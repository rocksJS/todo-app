import { FormArray, FormGroup } from '@angular/forms';

export const markAllAsDirty = (form: FormGroup | FormArray): void => {
  const AbstractControls = Object.values(form.controls);
  AbstractControls.forEach((control) => {
    if (control instanceof FormGroup || control instanceof FormArray) {
      markAllAsDirty(control);
    } else {
      control.markAsDirty();
    }
  });
};
