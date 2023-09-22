import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'plantManagement';
  // plants : any[]=[];

  // constructor(private http: HttpClient){}

  // ngOnInit(): void{
  //   this.http.get('http://localhost:8080/api/details').subscribe((data: any) =>{
  //     this.plants=data;
  //     console.warn(data);
  //   })
  // }
}
