import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {Person, PersonType} from "../common/People";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


interface DialogData {
  employees: Person[],
}

@Component({
  selector: 'app-logo-dialog',
  templateUrl: './logo-dialog.component.html',
  styleUrls: ['./logo-dialog.component.css']
})
export class LogoDialogComponent {

  employeeList: Person[] = []
  selectedView: string = 'list'
  cols: number = 2

  constructor(
    public dialogRef: MatDialogRef<LogoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.employeeList = data.employees
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: any) {
    this.cols = window.innerWidth <= 959 ? 1 : 2
  }

  convertToPersonTypeString(id: number): string {
    return PersonType.find(it => it.id === id)?.name || 'Employee'
  }

  switchView(view: string) {
    this.selectedView = view
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }

}
