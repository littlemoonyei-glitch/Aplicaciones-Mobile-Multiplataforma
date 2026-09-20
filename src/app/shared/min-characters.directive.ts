import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/** Validador personalizado usado por el buscador. */
@Directive({
  selector: '[minCharacters][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinCharactersDirective, multi: true }]
})
export class MinCharactersDirective implements Validator {
  @Input() minCharacters = 2;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').trim();
    return value.length === 0 || value.length >= this.minCharacters
      ? null
      : { minCharacters: { requiredLength: this.minCharacters, actualLength: value.length } };
  }
}
