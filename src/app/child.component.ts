import { Component, Input } from '@angular/core';
import { WhenThenService } from './whenthen.service';

class ComponentExtendedWhenThenService extends WhenThenService {
  constructor() {
    super();

    this.addCase('TEST2', 'This is a Test 2');
  }
}

@Component({
  selector: 'app-component-child',
  providers: [{ provide: WhenThenService, useClass: ComponentExtendedWhenThenService }],
  templateUrl: './child.component.html',
})
export class ChildComponent {

  @Input() Text: string;
}
