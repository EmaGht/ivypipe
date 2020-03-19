import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhenThenService } from './whenthen.service';
import { WhenThenPipe } from './whenthen.pipe';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    WhenThenPipe,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WhenThenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
