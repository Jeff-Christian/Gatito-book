import { UserExistsService } from './user-exists.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowerValidator } from './lower.validator';

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
  ) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [lowerValidator], [this.userExistsService.userExists()]],
      password: [''],
    });
  }

  register(){
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }

}
