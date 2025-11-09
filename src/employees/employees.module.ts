import { Module } from '@nestjs/common';
import { UniqueIdModule } from '../unique-id/unique-id.module';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [UniqueIdModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
