import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CategoryModel } from '../../models/CategoryModel';
import { SelectedCategoryForDetailsService } from '../selected-category-for-details.service';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {

    @Input({required:true}) category!:CategoryModel
    constructor(public selectedCategoryForDetailsService:SelectedCategoryForDetailsService,private router:Router,public categoryService:CategoryService){

    }
    handleCategoryClickForDetails() {
      this.router.navigateByUrl(`/admin/categories/${this.category.id}/details`);
    }
    getCategoryImage(categoryId:number){
      this.categoryService.getCategoryImageById(categoryId).subscribe({
        next:data=>{
          console.log(data)
          return data;
        },
        error:err=>{
          console.log(err)
        }
      })
    }
}
