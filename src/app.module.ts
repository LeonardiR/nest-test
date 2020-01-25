import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { usersSchema } from './users/schema/users.schema';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'users',
      schema: usersSchema,
      collection: 'users',
    }]),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-test'),
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class AppModule {}
