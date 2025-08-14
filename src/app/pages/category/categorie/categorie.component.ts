import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {CategoryModel} from '../../../models/CategoryModel';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category/category.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgOptimizedImage, CommonModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit {

  @Input({required: true}) category!: CategoryModel
  @Output() onDeleteCategory = new EventEmitter<number>();
  image: any = null;

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.loadCategoryImage(this.category.id);
  }

  loadCategoryImage(id: number) {
    return this.categoryService.getCategoryImage(id).subscribe({
      next: (data: ArrayBuffer) => {
        const bytes = new Uint8Array(data);
        let binary = '';
        bytes.forEach(b => binary += String.fromCharCode(b));
        this.image = 'data:image/webp;base64,' + btoa(binary);
      },
      error: (err) => {
        console.error('Image loading failed:', err);
      }
    })
  }

  deleteCategory(id: number) {
    this.onDeleteCategory.emit(id);
  }

  navigateToUpdateCategory(id: number) {
    this.router.navigateByUrl(`/admin/categories/${id}/update`)
  }
}
