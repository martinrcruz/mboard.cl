import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalButton, ModalDialog } from 'src/app/models/utils/modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  modalSettings = { title: '', task: '', buttons: {} };
  buttons: ModalButton[] = []
  constructor(
  ) { }

  ngOnInit(): void {
    this.buttons = [{ text: 'Agregar', action: 'add', condition: '' }]
    this.modalSettings = { title: 'Agregar Producto', task: 'add', buttons: this.buttons }
  }


}
