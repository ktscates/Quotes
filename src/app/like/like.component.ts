import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  likes : number = 0;
  unlikes: number = 0
  
  like() {
    this.likes++;
  }
  unlike(){
    this.unlikes++;
  }


  constructor() { }

  ngOnInit() {
  }

}
