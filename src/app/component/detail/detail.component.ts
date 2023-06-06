import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any;
  employee: any;

  constructor(private employeeService: EmployeeService,private router: Router,private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeesById(this.id).subscribe(data =>{
      this.employee = data;
    })
  }

}
