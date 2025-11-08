import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { UniqueIdService } from '../unique-id/unique-id.service';
import type { Employee } from './employee';
import type { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly uniqueIdService: UniqueIdService,
  ) {}

  private employees: Employee[] = [];

  create(employee: EmployeeDto) {
    this.loggerService.log('Creating new employee');
    const newEmployee = {
      id: this.uniqueIdService.generateIdV4(),
      ...employee,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  getAll() {
    this.loggerService.log('Getting all employees');
    return this.employees;
  }

  getById(id: string) {
    this.loggerService.log(`Getting employee if id: ${id}}`);
    return this.employees.filter((employee) => employee.id === id);
  }

  update(id: string, employee: EmployeeDto) {
    this.loggerService.log(`Updating employee of id ${id}`);
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === id,
    );
    if (employeeIndex === -1) {
      this.loggerService.warn('No employee found');
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    this.employees[employeeIndex] = {
      ...this.employees[employeeIndex],
      ...employee,
    };
    return this.employees[employeeIndex];
  }

  delete(id: string) {
    this.loggerService.log(`Deleting employee of id ${id}`);
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === id,
    );
    if (employeeIndex === -1) {
      this.loggerService.warn('No employee found');
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    this.employees.splice(employeeIndex, 1);
  }
}
