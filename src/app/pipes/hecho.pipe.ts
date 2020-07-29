import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hecho'
})
export class HechoPipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo){
      tipo = "https://media.giphy.com/media/d8Vq8SVB9YWApzUENe/giphy.gif";
    }
    return tipo;
  }

}
