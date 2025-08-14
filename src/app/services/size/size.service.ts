import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SizeModel} from '../../models/SizeModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  apiURL = "http://localhost:8081/sizes";

  constructor(private http: HttpClient) {
  }

  getAllSizes(): Observable<SizeModel[]> {
    return this.http.get<SizeModel[]>(this.apiURL);
  }

  saveSize(label: string): Observable<SizeModel> {
    return this.http.post<SizeModel>(this.apiURL, {label})
  }

  deleteSize(sizeId: number): Observable<string> {
    return this.http.delete(`${this.apiURL}/${sizeId}`, { responseType: 'text' })
  }

  updateSize(sizeId: number,newLabel:string): Observable<SizeModel> {
    return this.http.put<SizeModel>(`${this.apiURL}/${sizeId}`,{label: newLabel})
  }
}

