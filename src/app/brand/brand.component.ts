import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrandModel } from '../../models/BrandModel';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  @Input({ required: true }) brand!: BrandModel;
  @Output() itemDeleted=new EventEmitter<number>();
  constructor() { }

  handleDeleteItem(deletedItem: number) {
    this.itemDeleted.emit(deletedItem);
  }
}
