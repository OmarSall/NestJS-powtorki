import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() employee: EmployeeDto) {
    return this.employeesService.create(employee);
  }

  @Get()
  getALl() {
    return this.employeesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.employeesService.getById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() employee: EmployeeDto) {
    return this.employeesService.update(id, employee);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.employeesService.delete(id);
  }
}
