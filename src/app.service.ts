import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {

  users = [
    {
      email: 'randomtest@gmail.com',
      password: 'testrandom',
    },
    {
      email: 'admintest@gmail.com',
      password: 'testadmin',
    },
    {
      email: 'servertest@gmail.com',
      password: 'testserver',
    },
    {
      email: 'test',
      password: 'test',
    }
  ];

  checkUser(email: string, password: string) {
    const currentUser = this.users.find(p => p.email === email);

    if (!currentUser) {
      throw new HttpException('User does not exist', HttpStatus.UNAUTHORIZED);
    }

    if (password === currentUser.password) {
      // login successful
      return {
        status: HttpStatus.OK,
        message: 'Login successful',
        user: currentUser,
      };
    } else {
      // password is wrong
      throw new HttpException('Password is wrong', HttpStatus.FORBIDDEN);
    }
  }

  createUser(email: string, password: string) {
    const newUser = {
      email: email,
      password: password
    }
    this.users = [...this.users, newUser];
    return {
      status: HttpStatus.OK,
      message: 'User created',
      user: newUser,
    };
  }
}
