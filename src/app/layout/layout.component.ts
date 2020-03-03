import { Component, NgZone, OnInit } from '@angular/core';
import { GradientConfig } from '../app-config';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public gradientConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;

  constructor(private router: Router,private zone: NgZone, private location: Location) {
    if(localStorage.getItem('login') != 'true'){
      router.navigate(['login']);
    }
    
    this.gradientConfig = GradientConfig.config;
    // let currentURL = this.location.path();
    // const baseHerf = this.location['_baseHref'];
    // if (baseHerf) {
    //   currentURL = baseHerf + this.location.path();
    // }

    this.windowWidth = window.innerWidth;

    // if (currentURL === baseHerf + '/layout/collapse-menu'
    //   || currentURL === baseHerf + '/layout/box'
    //   || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
    //   this.gradientConfig.collapseMenu = true;
    // }

    this.navCollapsed = (this.windowWidth >= 992) ? this.gradientConfig.collapseMenu : false;
    this.navCollapsedMob = false;

  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      this.gradientConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        (document.querySelector('#nav-ps-gradient-able') as HTMLElement).style.maxHeight = '100%'; // 100% amit
      }, 500);
    }
  }

  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }

}
