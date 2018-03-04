import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(phone: number): string {
    if (phone.toString().length !== 10) {
      return `Tel: ${phone}`;
    }

    const num = phone.toString().match(/(\d{3})(\d{3})(\d{4})/);
    const numformatted = '(' + num[1] + ') ' + num[2] + ' ' + num[3];
    return `Tel: ${numformatted}`;
  }

}
