import { Module } from '@nestjs/common';

import { SentryModule } from '@sentry/nestjs/setup';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [SentryModule.forRoot()],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
