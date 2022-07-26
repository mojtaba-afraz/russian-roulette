import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  game:GameService;
  inputValue:string = '';
  addPlayerMode:boolean = false
  constructor(private router: Router,private gameService : GameService){
    this.game = gameService
  }
  addUser(){
    if (this.inputValue){
    this.game.addParticipants(this.inputValue)
    this.inputValue = ''
    }

  }
  startGame(){
    this.router.navigate(['game'])
  }
  activateAddPlayerMode(){
    this.addPlayerMode = !this.addPlayerMode
  }
  startGameOneToOne(){
    this.router.navigate(['1v1'])
  }

  ngOnInit(): void {
  }

}
