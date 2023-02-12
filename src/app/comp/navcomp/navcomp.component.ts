import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcomp',
  templateUrl: './navcomp.component.html',
  styleUrls: ['./navcomp.component.css']
})
export class NavcompComponent implements OnInit {
  
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
