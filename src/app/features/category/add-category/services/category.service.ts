import { Injectable } from '@angular/core';
import { AddCategoryModal } from '../../Models/add-category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }

  addcategory(modal: AddCategoryModal): Observable<AddCategoryResponse> {
    return this.http.post<AddCategoryResponse>('https://localhost:7017/api/AddCategory/', modal);
  }
}
export interface AddCategoryResponse {
  message: string;
}