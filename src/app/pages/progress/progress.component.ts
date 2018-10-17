import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {

  progressOne: number = 20;
  progressTwo: number = 30;

  constructor() {
  }

  ngOnInit() {
  }
}
