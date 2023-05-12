import { Component, Input, OnInit } from '@angular/core';
import { TableButton, TableExtraOptions, TableFilters, TableHeader } from './table-options';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headerData: TableHeader = { title: '', subtitle: '' };
  @Input() extraOptions: TableExtraOptions = { search: false, filters: false, exportToPdf: false, exportToCsv: false, exportToXlsx: false }

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Input() columnWidth: string[] = [];

  @Input() buttons: TableButton[] = [];


  constructor(
    private _dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    
  }

  getData() {
    
  }

}
