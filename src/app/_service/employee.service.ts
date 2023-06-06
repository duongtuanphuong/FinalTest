import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

const EMPLOYEE_API = "http://localhost:3000/employees"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getListEmployees(): Observable<any>{
    return this.http.get(EMPLOYEE_API,httpOptions);
  }

  getEmployeesById(id: any): Observable<any>{
    return this.http.get(EMPLOYEE_API + '/' + id,httpOptions);
  }

  createEmployee(employee: any):Observable<any>{
    return this.http.post(EMPLOYEE_API,employee,httpOptions);
  }


  updateEmployee(id: any,employee: any):Observable<any>{
    return this.http.put(EMPLOYEE_API + '/' + id ,employee,httpOptions);
  }

  deleteEmployee(id: any):Observable<any>{
    return this.http.delete(EMPLOYEE_API + '/' + id,httpOptions);
  }


  deleteEmployees(ids: any[]): Observable<any[]> {
    const deleteObservables = [];
    for (const id of ids) {
      deleteObservables.push(this.deleteEmployee(id));
    }
    return forkJoin(deleteObservables);
  }

}
