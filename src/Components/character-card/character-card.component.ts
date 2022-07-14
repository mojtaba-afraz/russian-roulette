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
  @Input() turn: number = -1;
  images:string[] = [
    'https://pngpress.com/wp-content/uploads/2020/08/uploads_gangster_gangster_PNG13.png',
    'https://pngimg.com/uploads/gangster/gangster_PNG68.png',
    'https://www.pngarts.com/files/7/Mafia-Gangster-Transparent-Images.png',
    'https://pngimg.com/uploads/gangster/gangster_PNG16.png',
    'https://www.pngkit.com/png/full/38-388570_lincoln-clay-mafia-3-lincoln-clay-png.png',
    'https://i.pinimg.com/originals/bb/23/5c/bb235c2c9af784ef4753b8268f469ee7.png',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0276f574-98ea-4e2d-ba44-68f500bf01bc/dcs3qtv-21c90255-7ad6-42ea-8e36-5960c86e5842.png/v1/fill/w_900,h_2228,strp/mafia_3_tommy_marcano_png_1_by_xgamergreaserx_dcs3qtv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjIyOCIsInBhdGgiOiJcL2ZcLzAyNzZmNTc0LTk4ZWEtNGUyZC1iYTQ0LTY4ZjUwMGJmMDFiY1wvZGNzM3F0di0yMWM5MDI1NS03YWQ2LTQyZWEtOGUzNi01OTYwYzg2ZTU4NDIucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0F6THH21hynDtNW2_Sbr_uxtISz1qmFeNLYBTsZAvkY',
  ];
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
