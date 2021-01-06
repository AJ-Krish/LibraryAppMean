import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={uname:'',
  password:'' }

  constructor(  private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
loginadmin(){

  this._auth.loginadmin(this.user);
  

}


}
