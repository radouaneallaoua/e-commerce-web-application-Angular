import { OrderProductModel } from './OrderProductModel';

export interface OrderModel {
  orderId: string;
  orderStatus: 'CANCELLED' | 'PENDING' | 'COMPLETED'; // Add other statuses as needed
  userId: string;
  orderProducts: OrderProductModel[];
}