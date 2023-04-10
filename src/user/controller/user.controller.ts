import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.entity';

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

    @Get()
    findOne(@Param('id') id: number): Observable<User> {
        return from(this.userService.findUser(id));
    }

}
