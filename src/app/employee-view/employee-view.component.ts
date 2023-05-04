import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, employees } from '../common/Employees';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
})
export class EmployeeViewComponent implements OnInit {

  employeesToShow: Employee[] = employees
  selectedEmployee: Employee | null = null

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(it => {
      try {
        console.log(it)
        const id = Number.parseInt(it.get("id") || "-1")
        console.log(id)
        const employee = this.employeesToShow.find(e => e.id === id)
        if (employee) {
          this.selectedEmployee = employee
        } else {
          this.redirectToNotFound()
        }
      } catch(err) {
        this.redirectToNotFound()
      }
    })
  }

  redirectToNotFound() {
    this.router.navigate(["/not-found"])
  }

  
}
