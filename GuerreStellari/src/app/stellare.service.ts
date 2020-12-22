import { Injectable } from '@angular/core';
import{HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StellareService {

  constructor(private http :HttpClient) { }
  searchStellare(query: string){
      const url=`https://www.swapi.tech/api/${query}`;
      const headers = new HttpHeaders("Content-Type");

    let obsStellare = this.http.get(url, { headers });
    return obsStellare;
    }
}
