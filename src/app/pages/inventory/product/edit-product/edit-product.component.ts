import { Component, OnInit } from '@angular/core';
import { ModalButton } from 'src/app/models/utils/modal';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  modalSettings = { title: '', task: '', buttons: {} };
  buttons: ModalButton[] = []
  modalData: any;
  constructor() { }

  ngOnInit(): void {
    this.buttons = [{ text: 'Editar', action: 'edit', condition: '' }]
    this.modalSettings = { title: 'Editar Producto', task: 'edit', buttons: this.buttons }
    this.modalData = {
      data1: '1',
      data2: '2'
    }
  }

}
