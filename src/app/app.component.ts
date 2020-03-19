import { Component } from '@angular/core';
import { WhenThenService } from './whenthen.service';

class BaseWhenThen extends WhenThenService {
  constructor() {
    super();

    this.addCase('TEST', 'This is a Test');
  }
}

@Component({
  selector: 'app-root',
  providers: [{ provide: WhenThenService, useClass: BaseWhenThen }],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ivypipe';
}
