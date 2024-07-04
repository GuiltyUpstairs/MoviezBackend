import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
    users = [
        {
          id: 1, 
          email: 'randomtest@gmail.com',
          password: 'testrandom',
        },
        {
          id: 2,
          email: 'admintest@gmail.com',
          password: 'testadmin',
        },
        {
          id: 3,
          email: 'servertest@gmail.com',
          password: 'testserver',
        },
        {
          id: 4,
          email: 'test',
          password: 'test',
        }
      ];
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
    ) {}
  
  async findUserByEmail(email: string): Promise<User | undefined> {
    const staticUser = this.users.find(user => user.email === email);
    if (staticUser) {
      return { ...staticUser} as User; // Return a dummy User object
    }
  }
}