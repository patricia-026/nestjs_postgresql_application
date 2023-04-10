import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/module/department.module';
import { UserService } from './user/service/user.service';
import { UserController } from './user/controller/user.controller';

@Module({
  imports: [DepartmentModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
