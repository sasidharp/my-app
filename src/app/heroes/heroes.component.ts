import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// This is contructor
  constructor() {  }
 //init class 
  ngOnInit() {
  }

}
