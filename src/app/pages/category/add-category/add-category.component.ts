import {JsonPipe, NgClass} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {CategoryService} from '../../../services/category/category.service';
import {Router} from '@angular/router';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {CategoryModel} from '../../../models/CategoryModel';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, NgClass, JsonPipe, MatOption, MatSelect],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {
  selectedFile: File | null = null;
  addCategory!: FormGroup;
  categories?: CategoryModel[];

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.addCategory = this.fb.group({
      label: ['', Validators.required],
      description: ['', Validators.required],
      parentCategoryId: [null],

    })
    this.categoryService.getAllCategories().subscribe({
      next: (data: CategoryModel[]) => {
        this.categories = data;
      },
      error: err => {
        confirm(err)
      }
    });
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
