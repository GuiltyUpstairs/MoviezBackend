import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {

  users = [
    {
      email : 'randomtest@gmail.com',
      password: 'testrandom', //
    },
    {
      email:'admintest@gmail.com',
      password: 'testadmin',
    },
    {
      email: 'servertest@gmail.com',
      password: 'testserver'
    }
  ]

  checkUser(email: string, password: string){
    const currentUser = this.users.find(p => p.email = email)

    if(currentUser != null){
      if(password == currentUser.password){
        //login successful
        return currentUser;
      }
      else{
        //password is wrong
        return {
          status: 401,
          message: 'Password is wrong'
        }
      }
    }
    else{
      return {
        status: 401,
        message: "User does not exist"
      }
    }
  }
}
