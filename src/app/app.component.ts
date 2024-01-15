import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ReactiveForm';
  isUpdatebtn: boolean = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.empForm.get('')?.valueChanges.subscribe((changeValue) => {
      if (changeValue) {
        this.salary?.setValidators(Validators.required);
      } else {
        this.salary?.clearValidators();
      }
      this.salary?.updateValueAndValidity();
    });
  }

  empForm = this.fb.group({
    id: [, Validators.required],
    name: ['', Validators.required],
    salary: [, Validators.required],
  });

  get id() {
    return this.empForm.get('id');
  }
  get name() {
    return this.empForm.get('name');
  }
  get salary() {
    return this.empForm.get('salary');
  }

  edit(emp: any) {
    this.isUpdatebtn = true;
    this.empForm.setValue({
      id: emp.id,
      name: emp.name,
      salary: emp.salary,
    });
  }
  clearForm() {
    this.empForm.reset();
    this.isUpdatebtn = false;
  }
    addData(){
  console.log(this.empForm.value);
    }
}
