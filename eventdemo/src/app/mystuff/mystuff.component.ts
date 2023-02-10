import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mystuff',
  templateUrl: './mystuff.component.html',
  styleUrls: ['./mystuff.component.css']
})
export class MystuffComponent implements OnInit {

  // This variable "someevent" gets initialized with an exception
  // of EventEmitter.
  //The parent (app) component then sets up the EventEmitter
  // with the necessary infomration to respond to the event
  // when we actually emit it.

  @Output() someevent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  tryit() {
    // Emit the "someevent" event up to our parent component (which is app)
    this.someevent.emit("Hello");
  }

}
