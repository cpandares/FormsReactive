import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html',
  
})
export class DinamicPageComponent {


  public myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Zelda', Validators.required ],
      [ 'Mario', Validators.required ],
    ])
  });

  public newFavorite:FormControl = this.fb.control('', Validators.required);

  constructor( private fb: FormBuilder ) { }

  get favoritesGames(){
    return this.myForm.get('favoritesGames') as FormArray;
  }


  isInvalid( controlName: 'name' | 'favoritesGames' ):boolean | null {
    return this.myForm.controls[controlName].errors && this.myForm.controls[controlName].touched;
  }

  isInvalidFieldInArray( formArray:FormArray, index:number ):boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched;

  }

  getErrorMessage( controlName: 'name' | 'favoritesGames' ):string | null {

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

  onAddFavoriteGame():void{
    if(this.newFavorite.invalid){
      this.newFavorite.markAsTouched();
      return;
    }

    this.favoritesGames.push( this.fb.control( this.newFavorite.value, Validators.required ) );
    this.newFavorite.reset();
  }

  onDeleteFavoriteGame( index:number ):void{
    this.favoritesGames.removeAt(index);
  }


  onSubmit():void{

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
   ( this.myForm.controls['favoritesGames']  as FormArray ) = this.fb.array([]);
    this.myForm.reset();


  }
  

}
