import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { MessageComponent } from './message/message.component';

import {GoldManagmentService} from './gold-managment.service'


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [GoldManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
 

  
  
}