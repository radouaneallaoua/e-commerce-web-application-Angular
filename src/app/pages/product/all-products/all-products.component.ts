import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductModel } from '../../../models/ProductModel';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [ProductComponent, MatButtonModule, MatIconModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  allProducts?: ProductModel[];
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.allProducts = [];
  }
  navigateToAddProduct() {
    this.router.navigateByUrl("/admin/products/add-product");
  }
}
