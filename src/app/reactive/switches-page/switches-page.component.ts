import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {


  public myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    terms: [ false, Validators.requiredTrue ]
  });

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor( private fb:FormBuilder ) { }
  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    });

   /*  this.myForm.valueChanges.subscribe( form => {
      delete form.terms;
      this.person = form;
    });

    this.myForm.get('terms')?.valueChanges.subscribe( value => {
      console.log(value);
    }); */
  }

  isInvalid( controlName: 'gender' | 'gender' | 'terms' ):boolean | null {
    return this.myForm.controls[controlName].errors && this.myForm.controls[controlName].touched;
  }

  getErrorMessage( controlName: 'gender' | 'gender' | 'terms' ):string | null {

    if( !this.myForm.controls[controlName] ) return null;

    const errors = this.myForm.controls[controlName].errors || {};

    
       for (const key of Object.keys(errors)) {
          switch (key) {
            case 'required':
              return 'This field is required';
            case 'minlength':
              return `Min length ${errors['minlength'].requiredLength}`;
            case 'min':
              return `Min value ${errors['min'].min}`;
            default:
              return null;
          }
       }

    return null;
  }


  onSubmit(){

    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }

    const { wantNotifications, ...newPerson } = this.myForm.value;
    console.log(this.myForm.value);
    this.person = newPerson;
    console.log(newPerson);

  }

}
