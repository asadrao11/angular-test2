import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-manufacturer',
  templateUrl: './view-manufacturer.component.html',
  styleUrls: ['./view-manufacturer.component.scss']
})
export class ViewManufacturerComponent implements OnInit {

  manufacturers: any;

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  ngOnInit() {
  }

  async getUsers(){
    this.http.get(environment.host + 'manufacturer').subscribe(res => {
      if(Array(res).length > 0){
        this.manufacturers = res;
      }
    })
  }
}
