import { RoleModel } from './RoleModel';
import { NotificationModel } from './NotificationModel';

export interface UserModel {
  id: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  roles: RoleModel[];
  imageURL: string;
  notifications: NotificationModel[];
}