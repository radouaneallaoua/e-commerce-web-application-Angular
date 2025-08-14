import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListItem} from '@angular/material/list';
import {Router, RouterModule} from '@angular/router';
import {NgClass} from '@angular/common';
import {AdminComponent} from '../../../admin/admin.component';

@Component({
  selector: 'app-drawer-item',
  standalone: true,
  imports: [RouterModule, MatListItem, MatIconModule, NgClass],
  templateUrl: './drawer-item.component.html',
  styleUrl: './drawer-item.component.css'
})
export class DrawerItemComponent {
  @Input({required: true}) name: any;
  @Input({required: true}) iconName: any;
  @Input({required: true}) path: any;
  @Input({required: true}) indice: any;


  constructor(public router: Router) {
  }


  navigate() {
    this.router.navigateByUrl(this.path);
  }

  protected readonly AdminComponent = AdminComponent;
}
