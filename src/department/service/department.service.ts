import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '../models/department.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private readonly departmentRepository: Repository<Department>
    ) {}

    createDepartment(department: Department): Observable<Department> {
        return from(this.departmentRepository.save(department));
    }

    findAllDepartment(): Observable<Department[]> {
        return from(this.departmentRepository.find({relations: ['users']}));
    } 

    findDepartment(id: number): Observable<Department> {
        return from(this.departmentRepository.findOne({
            where: {
                id: id,
            },
            relations: ['users']
        }));
    }

    updateDepartment(id: number, department: Department): Observable<UpdateResult> {
        return from(this.departmentRepository.update(id, department));
    }

    deleteDepartment(id: number): Observable<DeleteResult> {
        return from(this.departmentRepository.delete(id));
    }


}
