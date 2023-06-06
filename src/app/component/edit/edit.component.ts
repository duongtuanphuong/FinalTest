import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  employeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    sex: new FormControl('')
  });

  constructor(private employeeService: EmployeeService,private router: Router,private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.id);
  }

  editEmpolyee(){
    this.employeeService.updateEmployee(this.id,this.employeeForm.value).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
