import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  participants = [
    {
      name:'ali',
      status:1,
      index:0,
    },
    {
      name:'mojtaba',
      status:1,
      index:1,

    },
    {
      name:'mamad',
      status:1,
      index:2,

    },
    {
      name:'reyhaneh',
      status:1,
      index:3,
    },
    {
      name:'jafar',
      status:1,
      index:4,
    },
    {
      name:'haji',
      status:1,
      index:5,
    },
    {
      name:'javad',
      status:1,
      index:6,

    },
  ];
  magazine:number[] = []
  bulletCount = 1
  turn = 0;
  gameOver = false;
  resultBannerOpacity:number = 0;
  ResultBannerInterval:any = null;

  reloadGun(){
    for (let counter = 0;counter < this.bulletCount;counter++){
      this.magazine.push(1)
    }
    const emptyCount = 7 - this.magazine.length
    for (let counter = 0 ; counter < emptyCount ; counter++){
      this.magazine.push(0)
    }
    this.magazine = this.shuffle(this.magazine)
  }
  shuffle(array:number[]) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  dockScrollTop(){
    let dockScrollTop = document!.getElementById("character-dock")!.scrollTop
    let scrollTop:number = window.pageYOffset || dockScrollTop;
    document!.getElementById("character-dock")!.scrollTop = scrollTop + 25
  }
  showResultBanner(){
    this.ResultBannerInterval = setInterval(()=>{
      console.log(this.resultBannerOpacity)
      if (this.resultBannerOpacity >= 1){
        clearInterval(this.ResultBannerInterval);
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
    }
    else {
      this.turn = this.turn + 1
      this.dockScrollTop()
      this.cockingSound()
    }
  }
  shotSound(){
    const audio = new Audio('assets/Sounds/shot.mp3');
    audio.play().then(r => console.log(r));
  }
  cockingSound(){
    const audio = new Audio('assets/Sounds/cocking.mp3');
    audio.play().then(r => console.log(r));
  }
  constructor() {
    this.reloadGun()
  }
  ngOnInit(): void {}

}
