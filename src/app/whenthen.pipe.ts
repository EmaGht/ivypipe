import { Pipe, PipeTransform } from '@angular/core';
import { WhenThenService } from './whenthen.service';

@Pipe({ name: 'whenthen', pure: true })
export class WhenThenPipe implements PipeTransform {

    constructor(private whenthenContext: WhenThenService) { }

    transform(value: any): string {
        if (value == null || value === '') { return ''; }

        return this.whenthenContext.ret(value);
    }
}
