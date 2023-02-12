import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private aroute:ActivatedRoute) { }
  emobj:any={ };
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
    let id=this.aroute.snapshot.params["id"];
    this.emobj=this.emp.find(item=>item.epid=id)
  }

}
