import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

@Input() text:string|any
@Input() color:string|any

@Output() btnclick = new EventEmitter()

  ngOnInit(): void {
  }

  onclick(){
this.btnclick.emit()

  }


}
