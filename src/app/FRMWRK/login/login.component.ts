

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value = ""
  isLoginSuccess:boolean = false;

  loginForm;

  ngOnInit(): void {
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient:HttpClient) {

    this.loginForm = this.formBuilder.group({username:[''],password:['']});
  }

  get username() {
      return(this.loginForm.get('username'));
  }

  get password() {
    return(this.loginForm.get('password'));
  }



  onLogin() : void 
  {
    console.log(this.loginForm.value);
    var formData: any = new FormData();
    formData.append("username", this.username);
    formData.append("password", this.password);

    this.httpClient.post('http://localhost:4000/api/create-user', formData).subscribe((response) => console.log(response), (error) => console.log(error));

    if(this.loginForm.value.username == "admin") {
      this.isLoginSuccess = true;
      this.router.navigate(["menu-bar"])
    } else {
      alert("Invalid credentials "+ this.loginForm.value);
      console.log(this.loginForm.value);
      this.router.navigate(["login"])
    }
  }
}
