import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  plants : any[]=[];

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get('http://localhost:8080/api/details').subscribe((data: any) =>{
      this.plants=data;
      console.warn(data);
    })
  }
}
