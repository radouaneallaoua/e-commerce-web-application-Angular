import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar"
import { RouterLink, RouterOutlet } from '@angular/router';
import { DrawerItemComponent } from '../drawer-item/drawer-item.component';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterLink,
    DrawerItemComponent,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatNavList,
    MatListItem],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  drawerItems: any = [
    {
      "name": "Dashboard", "iconName": "bar_chart", "path": "/admin/dashboard",'indice':0
    },
    {
      "name": "Categories", "iconName": "category", "path": "/admin/categories",'indice':1
    },
    {
      "name": "Produits", "iconName": "shopping_bag", "path": "/admin/products",'indice':2
    },
    {
      "name": "Marques", "iconName": "label", "path": "/admin/brands",'indice':3
    },
    {
      "name": "Tailles", "iconName": "zoom_out", "path": "/admin/sizes",'indice':4
    },
    {
      "name": "Commandes", "iconName": "inventory_2", "path": "/admin/orders",'indice':5
    },
    


  ];

}
