import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ProductModel } from '../../models/ProductModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDividerModule,NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private router:Router){}
  @Input({required:true}) productModel!:ProductModel;
  isHovered: boolean = false;
  
  handleMouseLeave() {
    this.isHovered = false;
  }
  handleMouseOver() {
    this.isHovered = true;
  }
  handleProductDetails() {
    this.router.navigateByUrl(`/admin/products/${this.productModel.id}/details`);
  }

}
