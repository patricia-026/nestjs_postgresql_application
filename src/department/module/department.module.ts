import { Module } from '@nestjs/common';
import { Department } from '../models/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from '../controller/department.controller';
import { DepartmentService } from '../service/department.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Department])
    ],
    controllers: [DepartmentController],
    providers: [DepartmentService]
})
export class DepartmentModule {}
