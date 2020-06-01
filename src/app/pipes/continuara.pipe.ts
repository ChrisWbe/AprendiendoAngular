import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(value: string): string {
    if(value.toString().length > 140){
      value=value.substr(0,140);
    }
    return value;
  }

}
