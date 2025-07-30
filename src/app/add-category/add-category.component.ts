import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, NgClass],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {

  addCategory!: FormGroup;
  constructor(private fb: FormBuilder, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.addCategory = this.fb.group({
      label: ['', Validators.required],
      description: ['', Validators.required],
      imageURL: [null, Validators.required]
    })
  }
  openFile() {
    let inputElement = document.getElementById("file");
    inputElement?.click();
  }
  handleSubmit() {
    if (this.addCategory.valid) {
      console.log(this.addCategory.value)
      alert("JUST BEFORE SUBMITTING")
      this.categoryService.addCategory(this.addCategory.value.label, this.addCategory.value.description, this.addCategory.value.imageURL).subscribe({
        next: data => {
          alert(data)
        },
        error: error => {
          alert("ERROR");
        }
      });

    }

  }

}
