import { Component, OnInit } from '@angular/core';
import {GoldManagmentService} from'./../gold-managment.service'


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  constructor(private _goldManagmentService:GoldManagmentService) { }


  farmClick(){
    console.log("Farm clicked");
    this._goldManagmentService.farmClick();
    
  }
  caveClick(){
    console.log("Cave clicked")
    this._goldManagmentService.caveClick();
  }
  casinoClick(){
    console.log("Casino clicked")
    this._goldManagmentService.casinoClick();
    
  }

  houseClick(){
    console.log("House clicked")
    this._goldManagmentService.houseClick();
    

  }

  ngOnInit() {
  }

  

}
