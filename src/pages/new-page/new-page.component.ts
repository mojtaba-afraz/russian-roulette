import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../../app/game.service";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  game:GameService;
  inputValue:string = '';
  constructor(private router: Router,private gameService : GameService){
    this.game = gameService
  }
  addUser(){
    this.game.addParticipants(this.inputValue)
    this.inputValue = ''
  }
  startGame(){
    this.router.navigate(['game'])
  }

  ngOnInit(): void {
  }

}
