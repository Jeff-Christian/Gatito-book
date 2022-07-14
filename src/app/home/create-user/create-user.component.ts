import { UserExistsService } from './user-exists.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './new-user';
import { lowerValidator } from './lower.validator';
import { userPasswordsSameValidator }  from './identical-passwords.validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private NewUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [lowerValidator], [this.userExistsService.userExists()]],
      password: [''],
    }, {
      validators: [userPasswordsSameValidator]
    });
  }

  register(){

    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      console.log(newUser);
      this.NewUserService.signUp(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
