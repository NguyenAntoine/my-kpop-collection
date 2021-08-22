import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'M':
        return 'Mâle';
      case 'F':
        return 'Femelle';
    }
    return 'Mixte';
  }

}
