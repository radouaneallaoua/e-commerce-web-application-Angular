import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductModel } from '../../models/ProductModel';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../product.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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
    this.allProducts = this.productService.getAllProducts();
  }
  navigateToAddProduct() {
    this.router.navigateByUrl("/admin/products/add-product");
  }
}
