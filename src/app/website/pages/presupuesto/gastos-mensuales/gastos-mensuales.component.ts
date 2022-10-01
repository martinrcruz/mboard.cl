import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GastosService } from 'src/app/website/services/gastos.service';
import { GastoModalComponent } from './gasto-modal/gasto-modal.component';

@Component({
  selector: 'app-gastos-mensuales',
  templateUrl: './gastos-mensuales.component.html',
  styleUrls: ['./gastos-mensuales.component.scss']
})
export class GastosMensualesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  dataSource: any
  displayedColumns = ['detalle', 'descripcion', 'forma_pago', 'cuenta_asociada', 'fecha_pago', 'monto', 'editar']

  constructor(
    private _gastos: GastosService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getGastos();
  }


  getGastos() {
    this._gastos.getGastos()
      .subscribe({
        next: (res) => {
          var data = Object(res);

          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert('cannot bind gastos')
        }
      })
  }

  addGasto() {
    const dialogRef = this._dialog.open(GastoModalComponent, {
      width: "800px",
      data: {
        title: "Añadir un gasto",
        btn: "Añadir"
      }
    })


    dialogRef.afterClosed().subscribe({
      next: () => {
        this.getGastos()
      }
    })
  }

}
