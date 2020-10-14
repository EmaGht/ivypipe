import { Component, Injectable } from '@angular/core';
import { WhenThenService } from './whenthen.service';

@Injectable()
class BaseWhenThen extends WhenThenService {
  constructor() {
    super();

    this.addCase('TEST', 'This is a Test');
  }
}

@Component({
  selector: 'app-root',
  viewProviders: [{ provide: WhenThenService, useClass: BaseWhenThen }],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ivypipe';
}
