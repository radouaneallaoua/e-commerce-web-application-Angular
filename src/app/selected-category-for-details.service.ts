import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedCategoryForDetailsService {
  selectedCategoryForDetails:any=undefined;
  constructor() { }
  setSelectedCategory(newSelectedIndex:number){
    this.selectedCategoryForDetails=newSelectedIndex;
  }
}
