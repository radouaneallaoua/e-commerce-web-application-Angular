import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnyEditedItemService {
  editedItem = {
    id: null, target: undefined
  }
  constructor() { }
}
