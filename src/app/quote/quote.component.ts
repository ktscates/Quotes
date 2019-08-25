import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote(0,"","","", new Date())
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteGoal(isCreate, index){
    if(isCreate){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoted}?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quoteDate = new Date(quote.quoteDate)
    this.quotes.push(quote);
  }


  constructor() { }

  ngOnInit() {
  }

}
