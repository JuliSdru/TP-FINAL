import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libre'
})
export class LibrePipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo == "libre"){
      tipo = "https://image.flaticon.com/icons/svg/907/907830.svg";
    }else if(tipo == "ocupado") {
      tipo = "https://image.flaticon.com/icons/svg/864/864390.svg";
    }
    return tipo;
  }
}
