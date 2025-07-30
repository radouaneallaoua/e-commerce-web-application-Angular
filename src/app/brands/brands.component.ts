import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BrandComponent } from "../brand/brand.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../product.service';
import { BrandModel } from '../../models/BrandModel';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnyDeletedItemService } from '../any-deleted-item.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [BrandComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {

  brands!: BrandModel[];
  addBrandForm!: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private deletedItemService: AnyDeletedItemService) { }

  fetchAllBrands() {
    this.productService.getAllBrands().subscribe({
      next: data => {
        this.brands = data;
      },
      error: error => {
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this.fetchAllBrands();
    this.addBrandForm = this.fb.group({
      name: ['', Validators.required]
    })

  }

  handleSubmit() {
    if (this.addBrandForm.valid) {
      this.productService.addBrand(this.addBrandForm.value.name).subscribe({
        next: data => {
          this.fetchAllBrands()
        },
        error: err => {
          console.error(err);
        },
      })
    }
  }

  deleteBrandWithIdAndUpdateTheUI(event: number) {
    this.productService.deleteBrand(event).subscribe({
      next: data => {
        alert(data)
        this.fetchAllBrands();
      },
      error: err => {
        console.log(err)
      }
    })

  }



}
