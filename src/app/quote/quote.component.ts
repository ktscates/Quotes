import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote (0,"Welcome to my Application", "Cates", "Cates", new Date()),
    new Quote (0,"Welcome to my Application", "Cates", "Cates", new Date())
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quoteDate = new Date(quote.quoteDate)
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index,1)
    }
  }

  likes : number = 0;
  unlikes: number = 0;
  preNum:number;
  lastNum:number;
  counter:number;

  like(i) {
    this.quotes[i].likes++;
  }
  unlike(i){
    this.quotes[i].unlikes++;
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].likes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
