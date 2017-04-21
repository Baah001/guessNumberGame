import {UserType} from './user.interface';

export class User implements UserType {
  emailAddress: string;
  password: string;
  constructor(emailAddress: string, password: string){
    this.emailAddress = emailAddress;
    this.password = password;
  }

}
