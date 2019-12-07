import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeeInterface } from "../curso-interface";
import { EmployeesService } from "../employees.service";

@Injectable({
  providedIn: "root"
})
export class EmployeeResolveGuard implements Resolve<EmployeeInterface> {
  constructor(private service: EmployeesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EmployeeInterface> {
    if (route.params && route.params["id"]) {
      return this.service.loadById(route.params["id"]);
    }

    return of({
      id: null,
      name: null,
      salary: null
    });
  }
}
