import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  });

  correctUsernameFromDB: string = "Fyziik"
  correctPasswordFromDB: string = "1234"
  correctLogin = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onLoginSubmit() {
    console.log(this.loginForm)

    this.correctLogin =  this.validate(this.loginForm)

  }

  private validate(credentials: FormGroup) {
    if (credentials.value.username == this.correctUsernameFromDB) {
      if (credentials.value.password == this.correctPasswordFromDB) {
        return true;
      }
    }
    return false;
  }

  get username() { return this.loginForm.get('username') }

  get password() { return this.loginForm.get('password') }

  get firstName() { return this.loginForm.get('firstName') }

  get lastName() { return this.loginForm.get('lastName') }

  get email() { return this.loginForm.get('email') }

  get loginState() { return this.correctLogin }

}
