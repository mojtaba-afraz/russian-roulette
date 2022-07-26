import { Injectable } from '@angular/core';
interface participant {
  name:string,
  status:number,
  index:number
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  participants:participant[] = []
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
  shuffle(array: number[]) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] =
        [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  clearParticipants(){
    this.participants = []
  }
  shootSound(){
    const audio = new Audio('assets/Sounds/shot.mp3');
    audio.play()
  }

}
