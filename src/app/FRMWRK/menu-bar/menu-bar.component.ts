import { Component, OnInit } from '@angular/core';
import { MatMenuItem } from '@angular/material/menu';
import { Routes, RouterModule, RoutesRecognized, Router } from '@angular/router';



interface Menu {
  id: string;
  isSubMenu: boolean;
  menuItemName: string;
  subMenuItems: Array<string>;
}

interface MainMenuBar extends Array<Menu> {

}


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

mainMenuBar : MainMenuBar = [
  {id: "aa", isSubMenu: false, menuItemName: "HOME", subMenuItems: []},
  {id: "aa", isSubMenu: true, menuItemName: "SHIPPING", subMenuItems: ["Shipping", "Job Scheduling", "Manifesting", "Supplies", "Shipment Pricing", "ALTREF Update"]},
  {id: "aa", isSubMenu: true, menuItemName: "TRACKING", subMenuItems: ["Tracking Enquiry", "Tracking Entry"]},
  {id: "aa", isSubMenu: true, menuItemName: "REPORTING", subMenuItems: ["Operations Discrepancy Report", "Delivery Run Manifest", "Shipment History Report"]},
  {id: "aa", isSubMenu: true, menuItemName: "CONTACT US", subMenuItems: []}
];
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
