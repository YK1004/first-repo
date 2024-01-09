import { DYNAMIC_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  name: string = 'yakun'
  date: Data = new Date
  box: string = 'div-box'
  itemClass: string = 'itemP'
  h3Class: string = 'h3-dom font-w string'
}
