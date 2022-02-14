import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor() {}
  

   check(): void {
    console.log("this is the 1st page ")
   }
  ngOnInit(): void {
    console.log("this is the 1st page ")
  }

}
