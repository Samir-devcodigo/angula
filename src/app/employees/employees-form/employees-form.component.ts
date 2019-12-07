import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmployeesService } from "../employees.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employees-form",
  templateUrl: "./employees-form.component.html",
  styleUrls: ["./employees-form.component.scss"]
})
export class EmployeesFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  pageTitle = "Cadastrar empregado";

  constructor(
    private fb: FormBuilder,
    private service: EmployeesService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const employee = this.route.snapshot.data["employee"];

    if (employee.id) {
      this.pageTitle = `Editando o empregado ${employee.name}`;
    }

    this.form = this.fb.group({
      id: [employee.id],
      name: [
        employee.name,
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      salary: [employee.salary, [Validators.required]]
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      let msgSuccess = "Empregado adicionado com sucesso!";
      let msgError = "Erro ao criar empregado, tente novamente!";

      if (this.form.value.id) {
        msgSuccess = "Empregado atualizado com sucesso!";
        msgError = "Erro ao atualizar empregado, tente novamente!";
      }

      this.service.save(this.form.value).subscribe(
        success => {
          alert(msgSuccess);
          this.location.back();
        },
        error => alert(msgError)
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
