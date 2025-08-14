import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgClass} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CategoryModel} from '../../../models/CategoryModel';
import {CategoryService} from '../../../services/category/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [
    JsonPipe,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit {
  selectedFile: File | null = null;
  addCategory!: FormGroup;
  categories?: CategoryModel[];

  constructor(private fb: FormBuilder, private categoryService: CategoryService, public router: Router, protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe({
      next: (data: CategoryModel[]) => {
        this.categories = data;
      },
      error: err => {
        confirm(err)
      }
    });

    this.addCategory = this.fb.group({
      label: ['', Validators.required],
      description: ['', Validators.required],
      parentCategoryId: [null],
    })

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  openFile() {
    document.getElementById("file")!.click();
  }

  handleSubmit() {
    if (this.addCategory.valid) {
      this.categoryService.saveCategory(this.addCategory.value.label, this.addCategory.value.description, this.selectedFile, this.addCategory.value.parentCategoryId)
        .subscribe({
          next: data => {
            this.router.navigateByUrl("/admin/categories");
          },
          error: err => {
            console.error(err);
          }
        })
    }

  }

}
