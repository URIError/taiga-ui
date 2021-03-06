import {Component, Inject} from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const latinChars = /^[a-zA-Z]+$/;

function asyncValidatorFn(): AsyncValidatorFn {
    return (field: AbstractControl) => {
        return field.value && latinChars.test(field.value)
            ? of(null).pipe()
            : of({
                  error: new TuiValidationError('Допустимы только латинские буквы'),
              }).pipe(delay(5000));
    };
}

@Component({
    selector: 'tui-field-error-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFieldErrorExample4 {
    readonly form: FormGroup;

    constructor(@Inject(FormBuilder) private fb: FormBuilder) {
        this.form = this.fb.group({
            text: ['русский текст', Validators.required],
        });

        this.form.controls['text'].setAsyncValidators(asyncValidatorFn());
        this.form.controls['text'].markAsTouched();
    }
}
