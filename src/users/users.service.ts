import { Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';
import { User } from './user.interface';
import { users } from './db';

@Injectable()
export class UsersService {
  async retrieveUsers(): Promise<User[]> {
    Sentry.logger.info(Sentry.logger.fmt`Retrieving users`);
    return Promise.resolve(users);
  }

  async retrieveUser(id: string) {
    Sentry.logger.info(Sentry.logger.fmt`Retrieving user with id ${id}`);

    return Promise.resolve(users.find((user) => user.id === id));
  }

  async createUser(user: User) {
    Sentry.logger.info(Sentry.logger.fmt`Creating user ${user}`);
    return Promise.resolve(users.push(user));
  }

  async updateUser(id: string, user: User) {
    Sentry.logger.info(Sentry.logger.fmt`Updating user ${user}`);
    return Promise.resolve(users.find((user) => user.id === id, user));
  }

  async deleteUser(id: string) {
    Sentry.logger.info(Sentry.logger.fmt`Deleting user with id ${id}`);
    return Promise.resolve(users.filter((user) => user.id !== id));
  }

  throwError() {
    try {
      throw new Error('Test error');
    } catch (err) {
      console.log(err);

      Sentry.captureException(err);
    }

    return null;
  }
}
