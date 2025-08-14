import { Component, Input, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { OrderModel } from '../../../models/OrderModel';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {
   @Input({required:true}) order!:OrderModel;
   readonly panelOpenState = signal(false);
   constructor(){}

}
