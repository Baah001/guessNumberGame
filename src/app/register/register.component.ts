import { Component, OnInit } from '@angular/core';

import { UserType } from '../shared/user.interface';
import { User } from '../shared/userClass.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserEmail: string;
  newUserPassWord: string;
  userArray: User[] = [];
  personCreated: User;


  constructor() { }

  ngOnInit() {

  }

  onSubmit(event){
    event.preventDefault();
    this.newUserEmail = event.target.elements.registerEmail.value;
    this.newUserPassWord = event.target.elements.registerPassword.value;
    this.personCreated = new User(this.newUserEmail, this.newUserPassWord);

    this.userArray.push(new User(this.newUserEmail, this.newUserPassWord));




    localStorage.setItem("users", JSON.stringify(this.userArray));

    console.log(this.userArray);


  }

}

