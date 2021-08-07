import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  subscription: Subscription;
  data:any;
   constructor(private share : EmployeeService, private router : Router){
   this.subscription =  share.subj$.subscribe(value=>{
   console.log("received");
   this.data=value;
   });

  }

}
