import { Repository } from 'typeorm';
import { User } from './user.entity';
export interface UserRepository extends Repository<User> {
    this: Repository<User>;
    getUsers(): Promise<User[]>;
    getUser(email: string): Promise<User>;
    createUser(user: { email: string; password: string});
  }
export const customUserRepository: Pick<UserRepository, any> = {
  getUser(this: Repository<User>, email) {
    return this.findOne({ where: { email } });
  },

  getUsers(this: Repository<User>) {
    return this.find();
  },

  createUser(this: Repository<User>, user) {
    return this.save(user);
  },
}; 