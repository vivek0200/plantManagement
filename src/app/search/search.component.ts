import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  data:any;
  searchQuery: string='';
  constructor(private http:HttpClient){}
  
  fetchData(){
    this.http.get<any>('http://localhost:8080/api/'+this.searchQuery)
    .subscribe(response=>{
      this.data=response;
      console.warn(response);
      if(!this.data){
        console.warn("error");
      }
    });
  }
}
