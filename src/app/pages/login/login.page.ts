import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: String;
  password: String;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  tryLogin() {
    // this.http.post()
  }

}
