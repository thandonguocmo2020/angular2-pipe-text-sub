import { Pipe, PipeTransform } from '@angular/core';
import {isString} from "util";

@Pipe({
  name: 'txtSub'
})
export class TxtSubPipe implements PipeTransform {

  transform(value: string, cutTxt : number = 20, args: string = "..." ): any {
    return value.substr(0,cutTxt)+ args;
  }

}
