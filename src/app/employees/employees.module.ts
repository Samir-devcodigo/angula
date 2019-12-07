import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesListComponent, EmployeesFormComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
