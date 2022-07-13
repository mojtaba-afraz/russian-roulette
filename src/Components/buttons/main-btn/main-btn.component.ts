import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-btn',
  templateUrl: './main-btn.component.html',
  styleUrls: ['./main-btn.component.scss']
})
export class MainBtnComponent implements OnInit {
  @Input() btn!: any;
  ngOnInit(): void {
  }

}
