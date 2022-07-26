import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-one2one-page',
  templateUrl: './one2one-page.component.html',
  styleUrls: ['./one2one-page.component.scss']
})
export class One2onePageComponent implements OnInit {
  participants:{name:string,status:number,index:number}[] = [
    {
      name: 'You',
      status: 1,
      index: 0
    },
    {
      name:'God Father',
      status: 1,
      index: 1
    }
  ];
  turn:number = 0;
  magazine:number[] = [];
  bulletCount:number = 1;
  gameOver:boolean = false;
  resultBannerOpacity:number = 0
  audio:any;
  turns:string[]=[
    'You',
    'God Father',
    'You',
    'God Father',
    'You',
    'God Father',
  ]
  reloadGun() {
    for (let counter = 0; counter < this.bulletCount; counter++) {
      this.magazine.push(1)
    }
    const emptyCount = 6 - this.magazine.length
    for (let counter = 0; counter < emptyCount; counter++) {
      this.magazine.push(0)
    }
    this.magazine = this.gameService.shuffle(this.magazine)
  }
  cockingSound(){
    const audio = new Audio('assets/Sounds/cocking.mp3');
    audio.play()
  }
  goToMenu(){
    this.router.navigate(['/'])
  }
  showResultBanner(){
    let ResultBannerInterval = setInterval(()=>{
      if (this.resultBannerOpacity >= 1){
        clearInterval(ResultBannerInterval);
      }
      this.resultBannerOpacity += 0.1
    }, 40);
  }
  Shoot(){
    if (this.magazine[this.turn]){
      this.gameService.shootSound()
      this.gameOver = true
      this.showResultBanner()
      this.audio.pause()
    }
    else {
      this.turn = this.turn + 1
      this.cockingSound()
    }
  }
  constructor(private router: Router,private gameService : GameService){

  }
  ngOnInit(): void {
    this.reloadGun()
  }

}
