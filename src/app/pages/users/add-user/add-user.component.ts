import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public submitLoader: boolean;

  constructor() { 
    this.submitLoader = false;
  }

  ngOnInit() {
  }

  onSubmitLoader() {
    this.submitLoader = true;
    setTimeout(() => {
      this.submitLoader = false;
    }, 2000);
  }

}
