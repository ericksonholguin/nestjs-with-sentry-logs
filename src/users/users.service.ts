import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { users } from './db';

@Injectable()
export class UsersService {
  async retrieveUsers(): Promise<User[]> {
    return Promise.resolve(users);
  }

  async retrieveUser(id: string) {
    return Promise.resolve(users.find((user) => user.id === id));
  }

  async createUser(user: User) {
    return Promise.resolve(users.push(user));
  }

  async updateUser(id: string, user: User) {
    return Promise.resolve(users.find((user) => user.id === id, user));
  }

  async deleteUser(id: string) {
    return Promise.resolve(users.filter((user) => user.id !== id));
  }
}
