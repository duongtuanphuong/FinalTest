import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listEmployees : any;

  listDetele : any[] = [];

  constructor(private employeeService: EmployeeService,private router: Router){}

  ngOnInit(): void {
    this.getListEmployees();
  }

  getListEmployees(){
    this.employeeService.getListEmployees().subscribe({
      next: res =>{
        this.listEmployees = res;
      }
    })
  }

  deleleEmployee(id: any){
    this.employeeService.deleteEmployees(id).subscribe(data =>{
      this.getListEmployees();
    })
  }

  deleteEmployees(){
    
    this.employeeService.deleteEmployees(this.listDetele).subscribe(data =>{
      this.getListEmployees();
      this.listDetele = [];
    });
  }


  onSelectDelete(event: any){
    const selectedId = parseInt(event.target.value);
    if (this.listDetele.includes(selectedId)) {
      this.listDetele = this.listDetele.filter(id => id !== selectedId);
    } else {
      this.listDetele.push(selectedId);
    }
    console.log(this.listDetele);

  }





}
