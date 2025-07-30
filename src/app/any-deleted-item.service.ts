import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnyDeletedItemService {
  deletedItem = {
    'id': 0, 'target': ""
  }
  constructor() { }
  setDeletedItem(id: number, target: string) {
    this.deletedItem = { 'id': id, 'target': target }
  }
}
