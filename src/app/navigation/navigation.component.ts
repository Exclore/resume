import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  selected: any;

  menuItems = [
    {
      name: 'About',
      id: 'about'
    },
    {
      name: 'Skills',
      id: 'skills'
    },
    {
      name: 'Experience',
      id: 'experience'
    },
    {
      name: 'Education',
      id: 'education'
    },
    {
      name: 'Interests',
      id: 'interests'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  activate(event: any, menuItem: any){
    this.selected = menuItem.id;
  }
}
