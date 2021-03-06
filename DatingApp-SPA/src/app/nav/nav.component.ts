import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  loginModel: any = {};
  myCustomLoginText: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) {  }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.loginModel).subscribe(next => {
      this.alertify.success('Logged in Successfully.');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error('Invalid Login.');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }



}
