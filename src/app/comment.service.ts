import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCommentModel } from '../models/ProductCommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getAllCommentsOfTheProduct(productId:number):Observable<ProductCommentModel[]>{
    return this.http.get<ProductCommentModel[]>(`http://localhost:8080/products/${productId}/comments`);

  }
}
