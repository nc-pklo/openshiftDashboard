import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showGifKis : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showGifKiss(){
    this.showGifKis=!this.showGifKis;
  }

}
