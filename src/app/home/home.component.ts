import { Component } from '@angular/core';
import { Employee, employees } from '../common/Employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  employeesToShow: Employee[] = employees;

  constructor(private router: Router) {}

  handleOnEmployeeClick(id: number) {
    console.log('Provided id ' + id);
    this.router.navigate(['/employee'], { queryParams: { id: id } });
  }
}
