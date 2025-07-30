import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SizeComponent } from '../size/size.component';
import { ProductService } from '../product.service';
import { ProductSizeModel } from '../../models/ProductSizeModel';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [NgClass, MatButtonModule, MatInputModule, MatFormFieldModule, SizeComponent,ReactiveFormsModule],
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.css'
})
export class SizesComponent implements OnInit {
  sizes?: ProductSizeModel[];
  addSizeForm!:FormGroup;
  constructor(private productService: ProductService,private fb:FormBuilder) { }
  

  fetchAllSizes() {
    this.productService.getAllSizes().subscribe({
      next: data => {
        this.sizes = data;
      },
      error: error => {
        console.log(error)
      }
    })
  }
  ngOnInit(): void {

    this.fetchAllSizes();
    this.addSizeForm = this.fb.group({
      sizeLabel: ['', Validators.required]
    })
  }

  handleSubmit() {
    if (this.addSizeForm.valid) {
      this.productService.addSize(this.addSizeForm.value.sizeLabel).subscribe({
        next: data => {
          this.fetchAllSizes()
        },
        error: err => {
          console.error(err);
        },
      })
    }
  }
}
