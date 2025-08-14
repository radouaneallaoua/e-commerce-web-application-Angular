import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BrandModel} from '../../models/BrandModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiURL = "http://localhost:8081/brands";

  constructor(private http: HttpClient) {
  }

  getAllBrands(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>(this.apiURL);
  }

  saveBrand(name: string): Observable<BrandModel> {
    return this.http.post<BrandModel>(this.apiURL, {name})
  }

  deleteBrand(brandId: number): Observable<string> {
    return this.http.delete(`${this.apiURL}/${brandId}`, { responseType: 'text' })
  }

  updateBrand(brandId: number,newName:string): Observable<BrandModel> {
    return this.http.put<BrandModel>(`${this.apiURL}/${brandId}`,{name: newName})
  }
}
