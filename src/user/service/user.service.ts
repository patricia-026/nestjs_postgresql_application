import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentService } from 'src/department/service/department.service';
import { Repository, UpdateResult } from 'typeorm';
import { User } from '../models/user.entity';
import { Department } from 'src/department/models/department.entity';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private departmentService: DepartmentService
    ) {}

    createUser(body) {
        if('departments' in body) {
            body.departments.forEach((department) => {
                let actualDepartment = new Department();
                actualDepartment.name = department.name;
                this.departmentService.createDepartment(actualDepartment);
                Object.entries(department.users).forEach(([userKey]) => {
                    let actualUser = new User();
                    actualUser.name = department.users[userKey].name;
                    actualUser.birthday = department.users[userKey].birthday;
                    actualUser.department = actualDepartment;
                    this.userRepository.save(actualUser);
                });
            });
        }
        else {
            let user = new User();
            user.name = body.name;
            user.birthday = body.birthday;
            user.department = body.department;
            this.userRepository.save(user);
        }
    }

    findAllUser(): Observable<User[]> {
        return from(this.userRepository.find({relations: ['department']}));
    }

    findUser(id: number): Observable<User> {
        return from(this.userRepository.findOne({
            where: {
                id: id
            },
            relations: ['department']
        }));
    }

    updateUser(id: number, user: User): Observable<UpdateResult> {
        return from(this.userRepository.update(id, user));
    }


}
