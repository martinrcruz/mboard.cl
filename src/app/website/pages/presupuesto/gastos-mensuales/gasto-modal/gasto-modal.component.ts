import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gasto-modal',
  templateUrl: './gasto-modal.component.html',
  styleUrls: ['./gasto-modal.component.scss']
})
export class GastoModalComponent implements OnInit {
  title: string = ''
  btn: string = ''

  constructor(
    public dialogRef: MatDialogRef<GastoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    if(this.data){
      this.title = this.data.title 
      this.btn = this.data.btn
    }
    
  }
  

}
