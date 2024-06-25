import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //bhai teri maa ka bhosda

  users = [
    {
      username : 'abc',
      password: 'iwhfiuw',
    },
    {
      username:'clown',
      password: 'buppy',
    },
    {
      username: 'rand',
      password: 'random'
    }
  ]

  checkUser(username: string, password: string){
    const currentUser = this.users.find(p => p.username == username)

    if(currentUser != null){
      if(password == currentUser.password){
        //login successful
        const reply = {
          status: 200,
          message: 'success'
        }
        return reply
      }
      else{
        //passwosrd is wrong
        const reply = {
          status: 401,
          message: 'Password is wrong'
        }
        return reply
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
