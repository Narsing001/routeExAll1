import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  emp:any[]=[
    { 
      epid:11,epname:'Narsing',epsal:20000,epjob:'Manager'
    },
    { 
      epid:12,epname:'Sachin',epsal:25000,epjob:'Web Developer'
    },
    { 
      epid:13,epname:'Nishant',epsal:20000,epjob:'S/W Developer'
    },
    { 
      epid:14,epname:'Pravin ',epsal:20000,epjob:'ui Developer'
    },
    { 
      epid:15,epname:'Prashant',epsal:20000,epjob:'Accountant'
    }
  ]
  ngOnInit(): void {
  }

}
