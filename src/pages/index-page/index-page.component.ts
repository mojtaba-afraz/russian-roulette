import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  title = 'russian-roulette';
  buttons = [
    {
      title:'Start',
      link:'/new',
    },
    {
      title:'About Russian Roulette',
      link:'/about-game',
    },
    {
      title:'About Developer',
      link:'/about-developer',
    },

  ];
  ngOnInit(){
    // const audio = new Audio('assets/Sounds/backgroundMusic.mp3');
    // audio.loop = true;
    // audio.play().then(r => console.log(r));
  }
}
