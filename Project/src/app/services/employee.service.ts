import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  
  private sub = new BehaviorSubject("v");
  subj$ = this.sub.asObservable();

    send(value: any) {
    this.sub.next(value);
    console.log(value);
  }
 
}


