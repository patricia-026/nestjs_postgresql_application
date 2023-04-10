import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Post()
    create(@Body() body) {
        this.userService.createUser(body);
    }
}
