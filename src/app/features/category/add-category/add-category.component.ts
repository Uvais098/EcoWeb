import { Component, OnDestroy } from '@angular/core';
import { AddCategoryModal } from '../Models/add-category.model';
import { CategoryService } from './services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{

  model: AddCategoryModal;
  private addCategorySubscription?: Subscription;
  
  constructor(private CategoryService : CategoryService) {
    this.model= {
      name:'',
      urlhandle:''
    };
  }
 

  OnAddCategorySubmit(){
this.addCategorySubscription= this.CategoryService.addcategory(this.model).
subscribe({
  next: (response) => {
    console.log('Response:', response.message);  // Access the message from the response
  },
  error: (err) => {
    console.error('Error:', err);
  }
  
})
  }
  ngOnDestroy(): void {
   this.addCategorySubscription?.unsubscribe();
  }
}
