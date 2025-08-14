import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductSizeModel } from '../../../models/ProductSizeModel';
import {SizeModel} from '../../../models/SizeModel';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './size.component.html',
  styleUrl: './size.component.css'
})
export class SizeComponent {
  @Input({ required: true }) size!: SizeModel;
  @Output() onDeleteSize = new EventEmitter<number>();
  deleteSize(sizeId:number){
    this.onDeleteSize.emit(sizeId);
  }
}
