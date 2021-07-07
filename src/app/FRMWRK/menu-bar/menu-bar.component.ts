import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized, Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  isActive = false;
  selectedMenuItem : string;

  ngOnInit(): void {
  }

  constructor(private router: Router){
    console.log("This is console log!");
    this.selectedMenuItem = "/Home";
  }
  onClickMenuItem(menuItem : string){
    this.selectedMenuItem = menuItem;

    switch(menuItem) {
      case "TrackingEnquiry":
         this.router.navigate(["menu-bar"]);
         //this.router.navigate(['tracking-enquiry']);
        break;
      case "TrackingEntry":
         this.router.navigate(["menu-bar"]);
         //this.router.navigate(['tracking-entry']);
        break;
      default:
        alert("Invalid credentials ");

    }
  }
}
