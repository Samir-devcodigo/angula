import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EmployeeInterface } from "./curso-interface";
import { environment } from "../../environments/environment";
import { delay, tap, take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  private readonly API = `${environment.serverUrl}/employees`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get<EmployeeInterface[]>(this.API)
      .pipe(delay(2000), tap(console.log));
  }

  loadById(id) {
    return this.http.get<EmployeeInterface>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(employee) {
    return this.http.post(this.API, employee).pipe(take(1));
  }

  private update(employee) {
    return this.http.put(`${this.API}/${employee.id}`, employee).pipe(take(1));
  }

  save(employee) {
    if (employee.id) {
      return this.update(employee);
    }

    return this.create(employee);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
