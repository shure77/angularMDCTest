import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdcFabModule, MdcIconModule, MdcMenuModule, MdcCardModule, MdcButtonModule, MdcIconButtonModule } from '@angular-mdc/web';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcCardModule,
    MdcButtonModule,
    MdcIconButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
