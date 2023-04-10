import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/module/department.module';
import { UserModule } from './user/module/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './department/models/department.entity';
import { User } from './user/models/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Department, User]
    }),
    DepartmentModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
