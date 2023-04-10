import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { DepartmentService } from './department/services/department.service';
import { DepartmentController } from './department/controller/department.controller';

@Module({
  imports: [DepartmentModule],
  controllers: [AppController, DepartmentController],
  providers: [AppService, DepartmentService],
})
export class AppModule {}
