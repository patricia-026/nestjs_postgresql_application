import { Module, UseInterceptors } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [],
    providers: []
})
export class UserModule {
    
}
