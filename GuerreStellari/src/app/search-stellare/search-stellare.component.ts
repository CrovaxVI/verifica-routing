import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{StellareService}from '../stellare.service';
@Component({
  selector: 'app-search-stellare',
  templateUrl: './search-stellare.component.html',
  styleUrls: ['./search-stellare.component.css']
})
export class SearchStellareComponent  {
query: string;
obs:Observable<Object>
result:any;

  constructor(public stellare:StellareService) { }

  submit(query:HTMLInputElement):void{
    if(!query.value){
      return;
    }
    this.query=query.value;
    this.obs=this.stellare.searchStellare(this.query);
    this.obs.subscribe((data) => {this.result= data ; console.log(this.result)});
  }
}
