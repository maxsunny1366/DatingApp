import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  loginModel: any = {};
  myCustomLoginText: string;

  constructor(private authService: AuthService) {  }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.loginModel).subscribe(next => {
      console.log('Logged in Successfully.');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }



}
