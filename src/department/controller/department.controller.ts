import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartmentService } from '../service/department.service';
import { Department } from '../models/department.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

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

    @Put(':id')
    update(@Param('id') id: number, @Body() department: Department): Observable<UpdateResult> {
        return this.departmentService.updateDepartment(id, department);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.departmentService.deleteDepartment(id);
    }


}
