import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/CategoryModel';
import { CategorieComponent } from "../categorie/categorie.component";
import { CategoryService } from '../category.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


export interface DialogData {
  name: string,
  description: string,
  imageURL: any
}
@Component({
  selector: 'app-all-categories',
  standalone: true,
  imports: [CategorieComponent, MatButtonModule, MatDialogModule, RouterModule],
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.css'
})
export class AllCategoriesComponent implements OnInit {

  categories?: CategoryModel[];


  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next:data=>{
        this.categories=data;
      },
      error:err=>{
        confirm(err)
      }
    });
  }
  navigateToAddCategory() {
    this.router.navigateByUrl("/admin/categories/add-category")
  }


}
