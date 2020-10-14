import { Component, Input, Injectable, ContentChild } from '@angular/core';
import { WhenThenService } from './whenthen.service';

@Injectable()
class ComponentExtendedWhenThenService extends WhenThenService {
  constructor() {
    super();

    this.addCase('TEST2', 'This is a Test 2');
  }
}

@Component({
  selector: 'app-component-child',
  viewProviders: [{ provide: WhenThenService, useClass: ComponentExtendedWhenThenService }],
  templateUrl: './child.component.html',
})
export class ChildComponent {

  @Input() Text: string;
  @ContentChild("template") template_ref;
}
