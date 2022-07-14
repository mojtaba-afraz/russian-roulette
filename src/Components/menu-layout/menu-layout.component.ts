import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.scss']
})
export class MenuLayoutComponent implements OnInit {
  @Input() title:string = 'Russian Roulette'
  constructor() { }

  ngOnInit(): void {
  }

}
