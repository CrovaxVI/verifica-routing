import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StellareService } from '../stellare.service';

@Component({
  selector: 'app-stellare',
  templateUrl: './stellare.component.html',
  styleUrls: ['./stellare.component.css']
})
export class StellareComponent implements OnInit {
obs:Observable<Object>;
stellareServiceObs:Observable<Object>;
stelle:any;
  constructor(




  ) { }

  ngOnInit(): void {
  }

}
