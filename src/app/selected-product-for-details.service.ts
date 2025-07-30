import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductForDetailsService {
  selectedProductForDetails:any=undefined;
  constructor() { }
  setSelectedCategory(newSelectedIndex:number){
    this.selectedProductForDetails=newSelectedIndex;
  }
}
