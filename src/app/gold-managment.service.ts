import { Injectable } from '@angular/core';

@Injectable()
export class GoldManagmentService {
  gold:number=0;
  messages:Array<string>=[]
  constructor() {}
    
  farmClick(){
    let addition=Math.floor(Math.random()*5+1);
    this.gold+=addition;
    this.messages.push("*You have earned "+addition+" gold at the Farm!")
    console.log(this.messages);

  }

  caveClick(){
    let addition=Math.floor(Math.random()*6+5);
    this.gold+=addition;
    this.messages.push("*You have earned "+addition+" gold at the Cave!")

  }

  casinoClick(){
    let addition=Math.floor(Math.random()*200+(-100));
    this.gold+=addition;
    if(addition>=0){
      this.messages.push("*You won "+addition+" gold at the Casino!")
    }
    else{
      this.messages.push("*You have lost "+addition+" gold at the Casino!")
    }
  }

  houseClick(){
    let addition=Math.floor(Math.random()*9+7);
    this.gold+=addition;
    this.messages.push("*You have earned "+addition+" gold at the House!")

  }
}