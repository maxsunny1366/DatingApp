import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  listMode = false;
  values: any;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = true;
    this.listMode = false;
  }

  listToggle() {
    this.listMode = true;
    this.registerMode = false;
  }

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
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
