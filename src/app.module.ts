import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ColumnModule } from './column/column.module';
// import { ColumnItemModule } from './column-item/column-item.module';
// import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import MongoURI from './keys';

@Module({
  imports: [MongooseModule.forRoot(MongoURI), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
