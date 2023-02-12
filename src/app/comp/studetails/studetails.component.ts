import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studetails',
  templateUrl: './studetails.component.html',
  styleUrls: ['./studetails.component.css']
})
export class StudetailsComponent implements OnInit {

  stdobj:any={}

  constructor(private aroute:ActivatedRoute) { }

  student:any[]=[
    {sid:101,sname:'sachin',class:"MCA",divison:'A'},
    {sid:102,sname:'narsing',class:"MCA",divison:'A'},
    {sid:103,sname:'pavan',class:"MCA",divison:'A'},
    {sid:104,sname:'prashant',class:"MCA",divison:'A'},
    {sid:105,sname:'manoj',class:"MCA",divison:'A'},
    {sid:106,sname:'prabhat',class:"MCA",divison:'A'},
  ]
  ngOnInit(): void {
    let studid=this.aroute.snapshot.params['id'];
    this.stdobj=this.student.find(item=>item.sid==studid)
  }

}
