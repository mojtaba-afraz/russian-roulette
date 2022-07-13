import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'main-btn',
  templateUrl: './main-btn.component.html',
  styleUrls: ['./main-btn.component.scss']
})
export class MainBtnComponent implements OnInit {
  @Input() btn!: any;
  constructor(private router: Router){}

  goToLink(link:string){
    this.router.navigate([link])
  }
  ngOnInit(): void {
  }

}
