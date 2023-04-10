import { Module } from '@nestjs/common';
import { Department } from '../models/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Department])
    ]
})
export class DepartmentModule {}
