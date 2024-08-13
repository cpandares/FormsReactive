import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
    constructor() { }

    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public cantBeStrider( control: FormControl ): ValidationErrors | null {
        const value = control.value?.trim().toLowerCase();
        if ( value === 'strider' ) {
            return {
                cantBeStrider: true
            }
        }
        return null;
    }


    public isInValidField( form:FormGroup, field: string ){
        return form.controls[field].errors && form.controls[field].touched;
    }


    public isFieldOneEqualToFieldTwo( field1: string, field2: string ){

        return ( form: AbstractControl ): ValidationErrors | null => {
            const pass1 = form.get(field1)?.value;
            const pass2 = form.get(field2)?.value;

            if( pass1 !== pass2 ){
                form.get(field2)?.setErrors({ noIguales: true });
                return { noIguales: true }
            }

            form.get(field2)?.setErrors(null);
            return null;
        }
    }



}