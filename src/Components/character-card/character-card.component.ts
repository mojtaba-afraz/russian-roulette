import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character:any;
  @Input() isKilled:boolean = false;
  @Input() characterTurn:boolean = false;
  setCharacterClasses(){
    return {
      'border-red-600': this.isKilled,
      'bg-red-900':this.isKilled,
      'border-blue-600':this.characterTurn && !this.isKilled,
    };
  }
  constructor() { }
  ngOnInit(): void {}

}
