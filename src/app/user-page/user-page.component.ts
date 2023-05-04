import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {User, UserTable, UserTypes, UserSexTypes, DefaultUser} from '../common/UserModel';
import {matchPassword, createPasswordValidator} from "./user-page-validators.component";
import {MatTableDataSource} from "@angular/material/table";
import {CdkTableDataSourceInput} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  createNewFormActivated = true
  currentUser = -1

  hidePassword = true;

  hideConfirmationPassword = true;

  errorStateMatcher = new InstantErrorStateMatcher();

  passwordMismatchMatcher = new PasswordMismatchMatcher();

  constructor(private fb: FormBuilder) {
    // this.myDataSource = []
  }

  getDefaultFormValidator() {
    return [matchPassword]
  }

  getDefaultPasswordConfirmationValidators() {
    return createPasswordValidator()
  }

  userForm = this.fb.group(
    {
      id: [-1],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      type: [UserTypes[2]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', createPasswordValidator()],
      confirmPassword: ['', this.getDefaultPasswordConfirmationValidators()],
      subjects: this.fb.array([]),
      description: [''],
      sex: [UserSexTypes[0]],
      phone: [
        '',
        [Validators.required, Validators.pattern('\\+?3?8?(0\\d{9})')],
      ],
    },
    {
      validators: this.getDefaultFormValidator(),
    }
  );

  users: Array<User> = [
    {
      id: 1,
      name: 'Victor',
      lastName: 'Velichko',
      type: UserTypes[2],
      email: 'mail@mail.com',
      password: '1q2w3e4$E',
      subjects: ['1', '2', '3'],
      description: '',
      sex: UserSexTypes[0],
      phone: '+380453453454',
    },
  ];

  get userTableData(): UserTable[] {
    return this.users.map<UserTable>(u => (
      {
        id: u.id,
        name: u.name,
        lastName: u.lastName,
        type: u.type,
        email: u.email,
        gender: u.sex,
        phone: u.phone,
      })
    );
  }

  tableColumns = ['name', 'lastName', 'type', 'email', 'gender', 'phone', 'actions']
  myDataSource: CdkTableDataSourceInput<any> = this.userTableData;

  ngOnInit(): void {
    this.createNewFormActivated = true;
    this.clearForm()
  }

  userFromForm(id: number) {
    const subjectsList = this.subjects?.controls.map(it => it.value);
    const user: User = {
      id: id,
      name: this.name?.value || null,
      lastName: this.lastName?.value || null,
      type: this.type?.value || null,
      email: this.email?.value || null,
      password: this.password?.value || null,
      subjects: subjectsList,
      description: this.description?.value || null,
      sex: this.sex?.value || null,
      phone: this.phone?.value || null,
    };
    return user;
  }

  switchForm(state: boolean) {
    this.createNewFormActivated = state
    this.createNewFormActivated ? this.prepareCreateNewForm() : this.prepareUpdateForm();
  }

  prepareCreateNewForm() {
    this.clearForm();
    this.userForm.clearValidators();
    this.confirmPassword?.clearValidators();
    this.confirmPassword?.addValidators(
      this.getDefaultPasswordConfirmationValidators()
    );
    this.confirmPassword?.updateValueAndValidity();
    this.userForm.addValidators(this.getDefaultFormValidator());
  }

  prepareUpdateForm() {
    this.confirmPassword?.clearValidators();
    this.confirmPassword?.updateValueAndValidity();
    this.userForm.clearValidators();
  }

  clearForm() {
    this.currentUser = -1;
    this.userForm.reset();
    this.userForm.patchValue({...DefaultUser, confirmPassword: ''});
    this.subjects.controls = [];
    for (const field in this.userForm.controls) {
      const control = this.userForm.get(field);
      control?.markAsUntouched()
      control?.updateValueAndValidity()
    }
    this.userForm.markAsUntouched()
    this.userForm.updateValueAndValidity()
    console.log(this.userForm.controls)
  }

  updateTable() {
    this.myDataSource = this.userTableData;
  }

  onCreateNew() {
    const newUser = this.userFromForm(Math.ceil(Math.random() * 100000))
    console.log(newUser)
    this.users = [...this.users, newUser]
    this.updateTable()
    this.clearForm()
  }

  onUpdateExisting(selectedUser: number) {
    const newUser = this.userFromForm(selectedUser)
    this.users = this.users.map((u) => (u.id === newUser.id ? newUser : u))
    this.updateTable()
    this.switchForm(true)
  }

  onAddSubject() {
    this.subjects.controls.push(this.fb.control('subject'));
  }

  onRemoveSubject(i: number) {
    this.subjects.removeAt(i);
  }

  onDelete(id: number) {
    this.users = this.users.filter((it) => it.id !== id);
    this.clearForm();
    this.updateTable()
    this.switchForm(true);
  }

  onUpdate(id: number) {
    this.currentUser = id;
    const user: User | undefined = this.users.find((x) => x.id === id);
    if (!user) {
      console.error(`User with id ${id} was not found`);
      return;
    }
    const nSubjects: Array<FormControl<unknown>> = user.subjects.map(
      (s) => new FormControl(s)
    );
    this.subjects.controls = [];
    nSubjects.forEach((it) => this.subjects.controls.push(it));
    this.switchForm(false);
    this.userForm.patchValue({...user, confirmPassword: ''});
  }

  get id() {
    return this.userForm.get('id');
  }

  get name() {
    return this.userForm.get('name');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get type() {
    return this.userForm.get('type');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  get subjects() {
    return this.userForm.get('subjects') as FormArray;
  }

  get description() {
    return this.userForm.get('description');
  }

  get sex() {
    return this.userForm.get('sex');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get userTypes() {
    return UserTypes
  }

  get userSexTypes() {
    return UserSexTypes
  }

}

export class InstantErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null,
               form: FormGroupDirective | NgForm | null): boolean {
    const formIsTouched = form?.touched || false;
    return control !== null && control.invalid && formIsTouched
  }
}

export class PasswordMismatchMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null,
               form: FormGroupDirective | NgForm | null): boolean {
    const formIsTouched = form?.touched || false;
    return control !== null && (control.invalid || form?.errors?.['noMatch'] === true) && formIsTouched
  }
}
