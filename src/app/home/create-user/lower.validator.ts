import { AbstractControl } from "@angular/forms";

export function lowerValidator(control: AbstractControl){
  const valor = control.value as String;
  if(valor !== valor.toLocaleLowerCase()){
    return {lower: true};
  } else {
    return null;
  }
};
