import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Post()
    create(@Body() body) {
        this.userService.createUser(body);
    }

    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAllUser();
    }

    @Get('id')
    findOne(@Param('id') id: number): Observable<User> {
        return from(this.userService.findUser(id));
    }

    @Put(':id')
    update(@Param('id') id: number, user: User): Observable<UpdateResult> {
        return this.userService.updateUser(id, user);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.userService.deleteUser(id);
    }

}
