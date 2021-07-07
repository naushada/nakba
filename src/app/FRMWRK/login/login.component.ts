

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

  loginForm;

  ngOnInit(): void {
  }

  constructor(private router: Router, private formBuilder: FormBuilder) {

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

    if(this.loginForm.value.username == "admin") {
      this.router.navigate(["menu-bar"])
    } else {
      alert("Invalid credentials "+ this.loginForm.value);
      console.log(this.loginForm.value);
      this.router.navigate(["login"])
    }
  }
}
