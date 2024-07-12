import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any):Observable<any>{
    return this._http.post('http://localhost:8081/SpringRest-MiniProject/employee/save',data);
  }

  UpdateEmployee(id: number, data: any):Observable<any>{
    return this._http.put(`http://localhost:8081/SpringRest-MiniProject/employee/update/${id}`,data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8081/SpringRest-MiniProject/employee/report')
  }

  deleteEmployee(id:number):Observable<any>{
    return this._http.delete(`http://localhost:8081/SpringRest-MiniProject/employee/delete/${id}`);
  }


  // addEmployee(data: any):Observable<any>{
  //   return this._http.post('http://localhost:3000/employee',data);
  // }

  // UpdateEmployee(id: number, data: any):Observable<any>{
  //   return this._http.put(`http://localhost:3000/employee/${id}`,data);
  // }

  // getEmployeeList(): Observable<any> {
  //   return this._http.get('http://localhost:3000/employee')
  // }

  // deleteEmployee(id:number):Observable<any>{
  //   return this._http.delete(`http://localhost:3000/employee/${id}`);
  // }
}
