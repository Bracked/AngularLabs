import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'workinghours' })
export class WorkingHoursPipe implements PipeTransform {
  transform(value: number): string {
    let amount = value / 1000000000; // B
    if (amount > 1) {
      return `${Math.trunc(amount)}B`;
    }

    amount = value / 1000000; // M
    if (amount > 1) {
      return `${Math.trunc(amount)}M`;
    }

    amount = value / 1000; // K
    if (amount > 1) {
      return `${Math.trunc(amount)}K`;
    }

    return `${value}`;
  }
}
