import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';
import { DrawerSelectedIndexService } from '../drawer-selected-index.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-drawer-item',
  standalone: true,
  imports: [RouterModule, MatListItem, MatIconModule,NgClass],
  templateUrl: './drawer-item.component.html',
  styleUrl: './drawer-item.component.css'
})
export class DrawerItemComponent {
  @Input({ required: true }) name: any;
  @Input({ required: true }) iconName: any;
  @Input({ required: true }) path: any;
  @Input({ required: true }) indice: any;



  constructor(private router: Router, public selectedService: DrawerSelectedIndexService) { }


  navigate() {
    this.router.navigateByUrl(this.path);
  }
  handleClick() {
    this.selectedService.setSelectedIndex(this.indice);
  }
}
