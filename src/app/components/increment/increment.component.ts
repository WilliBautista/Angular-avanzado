import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  // ViewChild
  @ViewChild('txtprogress') txtprogress: ElementRef;

  // Inputs
  @Input() legend: string = 'Leyenda';
  @Input() progress: number = 50;

  // Outputs
  @Output() updateValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange( newValue: number ) {

    if (newValue > 100) {
      this.progress = 100;
    }

    if (newValue < 0 || newValue === null) {
      this.progress = 0;
    }
    this.txtprogress.nativeElement.value = this.progress;
    this.updateValue.emit( newValue );
  }

  changeProgress( value: number ) {
    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    } else if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress += value;
    this.txtprogress.nativeElement.focus();
    this.updateValue.emit( this.progress );
  }
}
