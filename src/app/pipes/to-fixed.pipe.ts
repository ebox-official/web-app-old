import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'toFixed'
})
export class ToFixedPipe implements PipeTransform {

	transform(value: string, fractionLimit?: number): unknown {

		if (!value) {
			return null;
		}

		let whole = '',
			fraction = '';

		if (value.indexOf('.') > -1) {
			[whole, fraction] = value.split('.')
		}
		else {
			whole = value;
		}

		let usFormat = '';
		let count = 0;
		for (let c = whole.length - 1; c >= 0; c--) {
			if (count === 3) {
				usFormat = ',' + usFormat;
				count = 0;
			}
			usFormat = whole[c] + usFormat;
			count++;
		}

		let trimmedFraction = '';
		if (fractionLimit > 0) {
			trimmedFraction = '.' + fraction.slice(0, fractionLimit);
			trimmedFraction = trimmedFraction.padEnd(fractionLimit + 1, '0');
		}
		return usFormat + trimmedFraction;
	}

}
