import {Injectable} from '@angular/core';

@Injectable()
export class ValidatorService {
  emailField: boolean;
  passwordField: boolean;
  myValid: boolean;
  secretNumber: number;
  minAndMaxArray: number[] = [];
  loginEmailValue: string;


  constructor() {


  }

  onStartValidation(loginValue, passwordValue) {
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < storedUsers.length; i++) {

      if (storedUsers[i].emailAddress === loginValue && storedUsers[i].password === passwordValue) {
        return true;
      }

    }


    console.log(loginValue);
  }


  generateMinAndMaxrange() {
    this.secretNumber = Math.round(Math.random() * 10);

    return this.secretNumber;


  }


  getMinAndMaxRange(secretNumber) {
    this.minAndMaxArray = [];
    let minRange = secretNumber - Math.round(Math.random() * 10);
    let maxrange = secretNumber + Math.round(Math.random() * 10);

    this.minAndMaxArray.push(minRange);
    this.minAndMaxArray.push(maxrange);

    return this.minAndMaxArray;

  }


}
