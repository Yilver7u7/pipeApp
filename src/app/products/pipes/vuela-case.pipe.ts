import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})

export class VuelaCasePipe implements PipeTransform {
  transform( value: boolean): 'SI vuela'|'NO vuela'{

    return value ? 'SI vuela' : 'NO vuela';

  }
}



