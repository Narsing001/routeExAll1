import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studdata',
  templateUrl: './studdata.component.html',
  styleUrls: ['./studdata.component.css']
})
export class StuddataComponent implements OnInit {

  constructor() { }
 student:any[]=[
   {sid:101,sname:'sachin',class:"MCA",divison:'A'},
   {sid:102,sname:'narsing',class:"MCA",divison:'A'},
   {sid:103,sname:'pavan',class:"MCA",divison:'A'},
   {sid:104,sname:'prashant',class:"MCA",divison:'A'},
   {sid:105,sname:'manoj',class:"MCA",divison:'A'},
   {sid:106,sname:'prabhat',class:"MCA",divison:'A'},
 ]
  ngOnInit(): void {
  }

}
