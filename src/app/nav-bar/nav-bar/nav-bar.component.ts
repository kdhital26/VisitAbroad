import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('myTag', {static: true}) myDivTag: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {    
    const element: any = document.getElementById('navBarMobileView');
    if (document.querySelector('.collapse')) {
    element.classList.remove('collapse');
    } else {
    element.classList.add('collapse');
    }
  }

}
