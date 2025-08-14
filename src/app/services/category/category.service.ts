import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../../models/CategoryModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL = "http://localhost:8081/categories";

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiURL);
  }

  getCategoryImage(categoryId: number) {
    return this.http.get(this.apiURL + `/${categoryId}` + "/image",{responseType:"arraybuffer"});
  }

  saveCategory(name: string, description: string, imageURL: any, parentCategoryId: any): Observable<CategoryModel> {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('imageURL', imageURL);
    if(parentCategoryId){
      formData.append('parentCategoryId', parentCategoryId);
    }

    return this.http.post<CategoryModel>(this.apiURL, formData)
  }

  deleteCategory(categoryId: number): Observable<string> {
    return this.http.delete(`${this.apiURL}/${categoryId}`, {responseType: 'text'})
  }


  updateCategory(categoryId: number, newName: string): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.apiURL}/${categoryId}`, {name: newName})
  }
}
