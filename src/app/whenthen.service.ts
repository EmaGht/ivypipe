import { Injectable } from '@angular/core';

@Injectable()
export class WhenThenService {

    protected WhenXThenY: {} = { };

    constructor() {
    }

    addCase(when: string, then: string) {
        this.WhenXThenY[when] = then;
    }

    ret(from: string) {
        return this.WhenXThenY[from];
    }
}
