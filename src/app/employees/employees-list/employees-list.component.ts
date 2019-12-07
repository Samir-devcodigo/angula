import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeesService } from "../employees.service";
import { EmployeeInterface } from "../curso-interface";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"]
})
export class EmployeesListComponent implements OnInit {
  deleteModalRef: BsModalRef;
  @ViewChild("deleteModal", { static: false }) deleteModal;
  employees$: Observable<EmployeeInterface[]>;
  employeeSelected;

  constructor(
    private modalService: BsModalService,
    private service: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employees$ = this.service.list();
  }

  onEdit(id) {
    this.router.navigate(["editar", id], { relativeTo: this.route });
  }

  onDelete(employee) {
    this.employeeSelected = employee;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: "modal-sm"
    });
  }

  onConfirmDelete() {
    this.service.remove(this.employeeSelected.id).subscribe(
      success => {
        this.deleteModalRef.hide();
        this.employees$ = this.service.list();
        alert("Empregado removido com sucesso!");
      },
      error => {
        this.deleteModalRef.hide();
        alert("Erro ao remove empregado, tente novamente!");
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
