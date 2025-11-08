import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { LoggerModule } from './logger/logger.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [ArticlesModule, EmployeesModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
