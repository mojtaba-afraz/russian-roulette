import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  participants = [
    {
      name: 'Ali',
      status: 1,
      index: 0,
    },
    {
      name: 'Mojtaba',
      status: 1,
      index: 1,

    },
    {
      name: 'Mamad',
      status: 1,
      index: 2,

    },
    {
      name: 'Reyhaneh',
      status: 1,
      index: 3,
    },
    {
      name: 'jafar',
      status: 1,
      index: 4,
    },
    {
      name: 'haji',
      status: 1,
      index: 5,
    },
    {
      name: 'javad',
      status: 1,
      index: 6,

    },
  ];
  magazine: number[] = []
  bulletCount = 1
  turn = 0;
  gameOver = false;
  resultBannerOpacity: number = 0;
  audio:any;

  reloadGun() {
    for (let counter = 0; counter < this.bulletCount; counter++) {
      this.magazine.push(1)
    }
    const emptyCount = 7 - this.magazine.length
    for (let counter = 0; counter < emptyCount; counter++) {
      this.magazine.push(0)
    }
    this.magazine = this.shuffle(this.magazine)
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
  dockScrollTop() {
    let scrollInterval:number;
    scrollInterval = setInterval(() => {
      let currentScroll = document!.getElementById("character-dock")!.scrollTop
      let cardPosition = document!.getElementById("character-" + this.turn)!.offsetTop

      console.log("currentScroll",currentScroll)
      console.log("cardPosition",currentScroll)
      if (currentScroll >= cardPosition || currentScroll >= 1000) {
      clearInterval(scrollInterval)
      }
      document!.getElementById("character-dock")!.scrollTop += 20
    }, 0.1)
  }
  showResultBanner(){
    let ResultBannerInterval = setInterval(()=>{
      if (this.resultBannerOpacity >= 1){
        clearInterval(ResultBannerInterval);
      }
      this.resultBannerOpacity += 0.1000
    }, 40);
  }
  Shoot(){
    if (this.magazine[this.turn]){
      this.shotSound()
      this.participants[this.turn].status = 0
      this.gameOver = true
      this.showResultBanner()
      this.audio.pause()
    }
    else {
      this.turn = this.turn + 1
      this.dockScrollTop()
      this.cockingSound()
    }
  }
  shotSound(){
    const audio = new Audio('assets/Sounds/shot.mp3');
    audio.play()
  }
  cockingSound(){
    const audio = new Audio('assets/Sounds/cocking.mp3');
    audio.play()
  }
  goToMenu(){
    this.router.navigate(['/'])
  }
  backgroundSound(){
    this.audio = new Audio('assets/Sounds/bg1.mp3');
    this.audio.loop = true;
    this.audio.play()
  }
  constructor(private router: Router){
  }
  ngOnInit(): void {
    this.reloadGun()
    this.backgroundSound()
  }

}
