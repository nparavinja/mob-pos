import { Component, OnInit, Input } from '@angular/core';
import { Utakmica } from 'src/app/utakmica.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-utakmica-element',
  templateUrl: './utakmica-element.component.html',
  styleUrls: ['./utakmica-element.component.scss'],
})
export class UtakmicaElementComponent implements OnInit {
 
  @Input() utakmica : Utakmica;

  constructor( public datePipe : DatePipe) { }

  ngOnInit() {}

}
