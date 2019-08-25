import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote(0,"","","")
  ];

  details(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote);
  }


  constructor() { }

  ngOnInit() {
  }

}
