import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router:Router) { }
  domains = ['BFSI', 'Retail and Distribution', 'Manufacturing', 'Telecom',
    'Life science and Healthcare', 'High Tech', 'Energy and Utilities',
    'Media and Entertainment'];
    employeeForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      sex: ['', Validators.required],
      eMailId: ['', Validators.required],
      dob: ['', Validators.required],
      domain: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
    submitted = false;
    data: any;

    get diagonastics() {
      return JSON.stringify(this.employeeForm.value);
    }
  
    get name() {
      return this.employeeForm.get("name");
    }
  
    get designation() {
      return this.employeeForm.get("designation");
    }
  
    get sex() {
      return this.employeeForm.get("sex");
    }
  
    get eMailId() {
      return this.employeeForm.get("eMailId");
    }
  
    get dob() {
      return this.employeeForm.get("dob");
    }
  
    get domain() {
      return this.employeeForm.get("domain");
    }
  
    onSubmit() {
      this.submitted = true;
      this.data = this.diagonastics;
      this.employeeService.send(this.data);
      //this.get_data.send("aaaaaaaaaaaaaaaaa") ;
      this.router.navigateByUrl('/employeedetails');
  
    }
  
    newEmployee() {
      this.employeeForm.reset();
    }
  ngOnInit() {
  }

}
