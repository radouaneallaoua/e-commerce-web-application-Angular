import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategorieComponent} from "../categorie/categorie.component";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {Router, RouterModule} from '@angular/router';
import {CategoryService} from '../../../services/category/category.service';


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


  constructor(public categoryService: CategoryService, private router: Router) {
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
  }

  navigateToAddCategory() {
    this.router.navigateByUrl("/admin/categories/add-category")
  }


  doDeleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe({
      next: data => {
        console.log(data);
        this.ngOnInit();
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
