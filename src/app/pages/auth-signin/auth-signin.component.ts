import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onclick(){
    if(localStorage.getItem('login') === 'true'){
      this.route.navigate(['public']);
    }
    else{
    localStorage.setItem('login','true');
    this.route.navigate(['/public']);
    }
  }
}
