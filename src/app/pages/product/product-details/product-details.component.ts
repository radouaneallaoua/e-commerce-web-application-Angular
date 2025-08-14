import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../models/ProductModel';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product?: ProductModel;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');

  }



}
