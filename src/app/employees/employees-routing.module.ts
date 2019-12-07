import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeesFormComponent } from "./employees-form/employees-form.component";
import { EmployeeResolveGuard } from "./guards/employee-resolve.guard";

const routes: Routes = [
  { path: "", component: EmployeesListComponent },
  {
    path: "novo",
    component: EmployeesFormComponent,
    resolve: {
      employee: EmployeeResolveGuard
    }
  },
  {
    path: "editar/:id",
    component: EmployeesFormComponent,
    resolve: {
      employee: EmployeeResolveGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
