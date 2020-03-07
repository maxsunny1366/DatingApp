import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ListData',
  templateUrl: './Lists.component.html',
  styleUrls: ['./Lists.component.css']
})
export class ListsComponent implements OnInit {

  values: any;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
    this.getUsers();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(Response => {
      this.values = Response;
    }, error => {
      console.log(error);
    });
  }

  getUsers() {
    this.http.get('http://localhost:5000/api/Users').subscribe(Response => {
      this.users = Response;
    }, error => {
      console.log(error);
    });
  }



}
