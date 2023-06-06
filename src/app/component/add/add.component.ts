import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employeeForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    thumbnail: [''],
    age: ['', [Validators.required, Validators.minLength(2), Validators.min(18), Validators.max(60)]],
    address: [''],
    sex: ['']
  });

  constructor(private employeeService: EmployeeService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  createEmployee(): void {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      alert('Employee form is invalid');
    }
  }


  get age() {
    return this.employeeForm.get('age');
  }

}