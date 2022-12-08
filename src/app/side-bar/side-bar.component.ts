import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa fa-home',
      url: '/dashboard'
    },
    {
      number: '2',
      name: 'Student',
      icon: 'fa fa-users',
      url: '/student-list'
    },
    {
      number: '3',
      name: 'Add Student',
      icon: 'fa fa-plus-square',
      url: '/add-student'
    },
    {
      number: '4',
      name: 'View Student',
      icon: 'fa fa-eye',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
