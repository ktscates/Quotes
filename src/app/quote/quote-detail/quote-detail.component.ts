import { Component, OnInit, Input, Output, EventEmitter, ɵisListLikeIterable } from '@angular/core';
import { Quote } from '../../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()  quote: Quote;
  @Output() isCreate = new EventEmitter<boolean>();

  quoteComplete(dated:boolean){
    this.isCreate.emit(dated);
  }

  quoteDelete(dated:boolean){
    this.isCreate.emit(dated)
  }

  constructor() { }

  ngOnInit() {
  }

}
