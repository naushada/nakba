

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { DbserviceService } from '../SERVICE/POST/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value = ""
  isLoginSuccess:boolean = false;

  loginFrm : FormGroup;

  ngOnInit(): void {
  }

  constructor(private router: Router, private fb: FormBuilder, private httpClient:HttpClient, private get:DbserviceService) {
    this.loginFrm = this.fb.group({login: this.fb.group({
      username:[''],
      password:['']})});
  }

  get username() {
      return(this.loginFrm.value.login.get('username'));
  }

  get password() {
    return(this.loginFrm.get('password'));
  }



  onLogin() : void 
  {
    console.log(this.loginFrm.value.login.username);
    //var formData: any = new FormData();
    //formData.append("username", this.username);
    //formData.append("password", this.password);

    //let uri : string = "http://192.168.0.189:8080/api/login?username=" + this.loginFrm.value.login.username + "&password=" + this.loginFrm.value.login.password;
    //let uri : string = "http://localhost:8080/api/shipping";
    let uri : string = "http://localhost:8080/api/login?username=" + this.loginFrm.value.login.username + "&password=" + this.loginFrm.value.login.password;
    //this.httpClient.post('http://localhost:4000/api/create-user', this.loginFrm).subscribe((response) => console.log(response), (error) => console.log(error));
    this.httpClient.get(uri).subscribe((response) => console.log("success " + response), (error) => console.log("Naushad error " + error));

    if(this.loginFrm.value.login.username == "admin") {
      this.isLoginSuccess = true;
      this.router.navigate(["menu-bar"])
    } else {
      alert("Invalid credentials "+ this.loginFrm.value.login.username);
      console.log(this.loginFrm.value.login.value);
      this.router.navigate(["login"])
    }
  }
}
