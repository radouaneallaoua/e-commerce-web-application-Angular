import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerSelectedIndexService {
  selecteIndex:number=0;
  constructor() { }
  setSelectedIndex(newIndex:number){
     this.selecteIndex=newIndex;
  }
}
