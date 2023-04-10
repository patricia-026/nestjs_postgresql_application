import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DepartmentService } from '../service/department.service';
import { Department } from '../models/department.entity';
import { Observable } from 'rxjs';

@Controller('department')
export class DepartmentController {
    constructor(
        private departmentService: DepartmentService
    ) {}

    @Post()
    create(@Body() department: Department): Observable<Department> {
        return this.departmentService.createDepartment(department);
    }

    @Get()
    findAll(): Observable<Department[]> {
        return this.departmentService.findAllDepartment();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Observable<Department> {
        return this.departmentService.findDepartment(id);
    }
}
