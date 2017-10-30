import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-with-sidenav',
  templateUrl: './page-with-sidenav.component.html',
  styleUrls: ['./page-with-sidenav.component.css']
})
export class PageWithSidenavComponent implements OnInit {
  isOpen: boolean = false;
  menuId: number = 0;

  constructor() { }

  ngOnInit() {
  }

  closeSidenav(){
    if(this.isOpen){
      this.toggleExpanded(0);
      this.isOpen = false;
    }
  }

  toggleExpanded(selectedMenuId: number){
    if(!this.isOpen){
      this.isOpen = true;
      this.menuId = selectedMenuId;
    }else{
      if(this.menuId === selectedMenuId){
        this.isOpen = false;
        selectedMenuId = 0;
      }
      this.menuId = selectedMenuId;
    }
  }

  isSelected(value: number){
    return this.menuId === value;
  }
}
