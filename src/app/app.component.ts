import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'russian-roulette';
  backgroundSound(){
    const audio = new Audio('assets/Sounds/backgroundMusic.mp3');
    audio.loop = true;
    audio.play().then(r => console.log(r));
  }
  ngOnInit(){
    this.backgroundSound()
  }
}
