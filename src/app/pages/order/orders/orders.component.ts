import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OrderModel } from '../../../models/OrderModel';
import { OrderItemComponent } from "../order-item/order-item.component";
@Component({
  selector: 'app-orders',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    OrderItemComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: OrderModel[]=[
    {
      "orderId": "string1",
      "orderStatus": "CANCELLED",
      "userId": "string",
      "orderProducts": [
        {
          "productId": 1,
          "quantity": 10,
          "orderId": "string1"
        }
      ]
    },
    {
      "orderId": "string2",
      "orderStatus": "CANCELLED",
      "userId": "string",
      "orderProducts": [
        {
          "productId": 1,
          "quantity": 100,
          "orderId": "string2"
        }
      ]
    },
    {
      "orderId": "string3",
      "orderStatus": "CANCELLED",
      "userId": "string",
      "orderProducts": [
        {
          "productId": 1,
          "quantity": 4,
          "orderId": "string3"
        },
        {
          "productId": 1,
          "quantity": 14,
          "orderId": "string3"
        }
      ]
    }
  ];


}
