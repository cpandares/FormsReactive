import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const productInit =  { name: 'Laptop', price: 1000, inStorage: 10 };


@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  // public myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // }); 


  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    //this.myForm.reset(productInit);
  }

  isInvalid( controlName: 'name' | 'price' | 'inStorage' ):boolean | null {
    return this.myForm.controls[controlName].errors && this.myForm.controls[controlName].touched;
  }

  getErrorMessage( controlName: 'name' | 'price' | 'inStorage' ):string | null {

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

  onSubmit():void{

    if(this.myForm.invalid) return;

      console.log(this.myForm.value);
      

      this.myForm.reset({
        name: '',
        price: 0,
        inStorage: 0
      });
   
  }

}
