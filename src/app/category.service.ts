import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}


  getAllCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('http://localhost:8080/categories');
  }

  getCategoryById(categoryId: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(
      `http://localhost:8080/categories/${categoryId}`
    );
  }

  getCategoryImageById(categoryId: number): Observable<any> {
    return this.http.get(
      `http://localhost:8080/categories/category-image/${categoryId}`
    );
  }

  addCategory(
    label: string,
    description: string,
    imageURL: File
  ): Observable<CategoryModel> {
    const formData = new FormData();
    formData.append('label', label);
    formData.append('description', description);
    formData.append('imageURL', imageURL);
    return this.http.post<CategoryModel>(
      `http://localhost:8080/categories`,
      formData,
      {
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        },
      }
    );
  }

  deleteCategory(categoryId: number) {
    return this.http.delete(`http://localhost:8080/categories/${categoryId}`);
  }

  updateCategory(categoryId: number, newData: any) {
    return this.http.put(
      `http://localhost:8080/categories/${categoryId}`,
      newData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  }
}
