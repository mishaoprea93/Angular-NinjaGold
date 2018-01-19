import { Component } from '@angular/core';
import {GoldManagmentService} from './gold-managment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold:number=0;
  constructor(private _goldManagmentService:GoldManagmentService ){
    this.gold=this._goldManagmentService.gold;}
    
}
