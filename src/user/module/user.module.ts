import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.entity'
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { DepartmentController } from 'src/department/controller/department.controller';
import { DepartmentService } from 'src/department/service/department.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UserController, DepartmentController],
    providers: [UserService, DepartmentService]
})
export class UserModule {
    
}
