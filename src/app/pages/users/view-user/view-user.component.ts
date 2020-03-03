import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  ngOnInit() {
  }

  async getUsers(){
    this.http.get(environment.host + 'user').subscribe(res => {
      console.log(res);
      if(Array(res).length > 0){
        this.users = res;
      }
    })
  }
}
