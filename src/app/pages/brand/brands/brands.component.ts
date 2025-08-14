import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BrandComponent} from "../brand/brand.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {BrandModel} from '../../../models/BrandModel';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product/product.service';
import {BrandService} from '../../../services/brand/brand.service';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [BrandComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatProgressSpinnerModule
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {

  brands!: BrandModel[];
  addBrandForm!: FormGroup;
  isLoading: boolean = true;

  constructor(private brandService: BrandService, private fb: FormBuilder) {
  }

  fetchAllBrands() {
    this.brandService.getAllBrands().subscribe({
      next: data => {
        this.brands = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.addBrandForm = this.fb.group({
      name: ['', Validators.required]
    })
    this.fetchAllBrands();
    this.isLoading = false;

  }

  handleSubmit() {
    if (this.addBrandForm.valid) {
      this.brandService.saveBrand(this.addBrandForm.value.name).subscribe({
        next: data => {
          this.ngOnInit()
        },
        error: err => {
          console.error(err)
        }
      })
    }
  }

  deleteBrandWithIdAndUpdateTheUI(event: number) {
    this.brandService.deleteBrand(event).subscribe({
      next: (data : string) => {
        this.ngOnInit();
      },
      error: err => {
        console.error(err)
      }
    })


  }


}
