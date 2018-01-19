import { Component, OnInit } from '@angular/core';
import { GoldManagmentService } from '../gold-managment.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private _goldManagmentService:GoldManagmentService) { }
  messages=this._goldManagmentService.messages;
  
  
  ngOnInit() {
  }

}
