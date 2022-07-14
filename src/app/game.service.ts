import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  participants:{name:string,status:number,index:number}[] = []
  userNames:string[] = [
    'Fastfingers',
    'Fat Tony',
    'Godfather',
    'Guttermouth',
    'Snake Eyes',
    'Stab Happy',
    'Dreads',
    'Rifle'
  ]
  constructor() {}
  generatePlayer(){
    let newUser = {
      name:this.userNames[Math.floor(Math.random() * 7)],
      status: 1,
      index: this.participants.length
    }
    this.participants.push(newUser)
  }
  addParticipants(data:string){
    if (this.participants.length < 7){
      let user = {
        name:data,
        status:1,
        index:this.participants.length
      }
      this.participants.push(user)
    }
  }
  getParticipants(completion:boolean = false){
    if (this.participants.length < 7 && completion){
      let count = this.participants.length
      console.log(count)
      for (count;count < 7;count++){
        this.generatePlayer()
      }
    }
      return this.participants
  }
  clearParticipants(){
    this.participants = []
  }
}
