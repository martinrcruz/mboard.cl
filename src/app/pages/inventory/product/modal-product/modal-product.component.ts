import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalButton, ModalDialog } from 'src/app/models/utils/modal';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {

  @Input() modalSettings: any;
  @Input() modalData: any;

  title: string = "";
  task: string = "";
  buttons: ModalButton[] = []
  modal_data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalDialog
  ) { }

  ngOnInit(): void {
    if (this.modalSettings.title !== '') {
      this.title = this.modalSettings.title;
      this.task = this.modalSettings.task;
      this.buttons = this.modalSettings.buttons;
      console.log(this.buttons)
    }
    if (this.modalData != null) {
      this.modal_data = this.modalData;
    }
  }

}
