import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns';

@Pipe({
  name: 'calcTimeAgo'
})
export class CalcTimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    const result = formatDistanceToNowStrict(value, { addSuffix: true });
    return result;
  }

}
