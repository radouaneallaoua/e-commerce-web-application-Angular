import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSizeModel } from '../models/ProductSizeModel';
import { ProductColorModel } from '../models/ProductColorModel';
import { BrandModel } from '../models/BrandModel';
import { ProductCommentModel } from '../models/ProductCommentModel';
import { Color } from './enums/color';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts: ProductModel[] = [
    {
      "id": 1,
      "name": "string1",
      "description": "string1",
      "price": 100,
      "oldPrice": 0,
      "stock": 0,
      "categoryId": 0,
      "brand": {
        "id": 0,
        "name": "Brand A"
      },
      "productColorList": [
        {
          "id": 0,
          "color": "RED"
        },
        {
          "id": 10,
          "color": "VIOLET"
        }
      ],
      "productSizeList": [
        {
          "id": 0,
          "sizeLabel": "M"
        }
      ],
      "productImageList": [
        {
          "id": 0,
          "image": "image_url_1.jpg",
          "productId": 1
        }
      ],
      "evaluations": [
        {
          "id": 0,
          "stars": 4,
          "userId": "user1",
          "productId": 1
        }
      ],
      "reactions": [
        {
          "id": 0,
          "userId": "user1",
          "productId": 1
        }
      ]
    },
    {
      "id": 2,
      "name": "string2",
      "description": "string2",
      "price": 200,
      "oldPrice": 250,
      "stock": 5,
      "categoryId": 1,
      "brand": {
        "id": 1,
        "name": "Brand B"
      },
      "productColorList": [
        {
          "id": 1,
          "color": "BLUE"
        }
      ],
      "productSizeList": [
        {
          "id": 1,
          "sizeLabel": "L"
        }
      ],
      "productImageList": [
        {
          "id": 1,
          "image": "image_url_2.jpg",
          "productId": 2
        }
      ],
      "evaluations": [
        {
          "id": 1,
          "stars": 5,
          "userId": "user2",
          "productId": 2
        }
      ],
      "reactions": [
        {
          "id": 1,
          "userId": "user2",
          "productId": 2
        }
      ]
    },
    {
      "id": 3,
      "name": "string3",
      "description": "string3",
      "price": 150,
      "oldPrice": 180,
      "stock": 2,
      "categoryId": 2,
      "brand": {
        "id": 2,
        "name": "Brand C"
      },
      "productColorList": [
        {
          "id": 2,
          "color": "GREEN"
        }
      ],
      "productSizeList": [
        {
          "id": 2,
          "sizeLabel": "S"
        }
      ],
      "productImageList": [
        {
          "id": 2,
          "image": "image_url_3.jpg",
          "productId": 3
        }
      ],
      "evaluations": [
        {
          "id": 2,
          "stars": 3,
          "userId": "user3",
          "productId": 3
        }
      ],
      "reactions": [
        {
          "id": 2,
          "userId": "user3",
          "productId": 3
        }
      ]
    },
    {
      "id": 4,
      "name": "string4",
      "description": "string4",
      "price": 75,
      "oldPrice": 90,
      "stock": 10,
      "categoryId": 3,
      "brand": {
        "id": 3,
        "name": "Brand D"
      },
      "productColorList": [
        {
          "id": 3,
          "color": "YELLOW"
        }
      ],
      "productSizeList": [
        {
          "id": 3,
          "sizeLabel": "XL"
        }
      ],
      "productImageList": [
        {
          "id": 3,
          "image": "image_url_4.jpg",
          "productId": 4
        }
      ],
      "evaluations": [
        {
          "id": 3,
          "stars": 2,
          "userId": "user4",
          "productId": 4
        }
      ],
      "reactions": [
        {
          "id": 3,
          "userId": "user4",
          "productId": 4
        }
      ]
    },
    {
      "id": 5,
      "name": "string5",
      "description": "string5",
      "price": 300,
      "oldPrice": 320,
      "stock": 8,
      "categoryId": 4,
      "brand": {
        "id": 4,
        "name": "Brand E"
      },
      "productColorList": [
        {
          "id": 4,
          "color": "BLACK"
        }
      ],
      "productSizeList": [
        {
          "id": 4,
          "sizeLabel": "XXL"
        }
      ],
      "productImageList": [
        {
          "id": 4,
          "image": "image_url_5.jpg",
          "productId": 5
        }
      ],
      "evaluations": [
        {
          "id": 4,
          "stars": 1,
          "userId": "user5",
          "productId": 5
        }
      ],
      "reactions": [
        {
          "id": 4,
          "userId": "user5",
          "productId": 5
        }
      ]
    }
  ]
  constructor(private http: HttpClient) { }
  getAllProducts(): ProductModel[] {
    return this.allProducts;
  }

  getProductById(productId: number): ProductModel | undefined {
    return this.allProducts.find(p => p.id === productId);
  }

  getAllSizes(): Observable<ProductSizeModel[]> {
    return this.http.get<ProductSizeModel[]>("http://localhost:8080/sizes");
  }

  getAllColors(): Observable<ProductColorModel[]> {
    return this.http.get<ProductColorModel[]>("http://localhost:8080/colors");
  }

  getAllBrands(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>("http://localhost:8080/brands");
  }

  addSize(sizeLabel: string): Observable<Object> {
    return this.http.post("http://localhost:8080/sizes", {
      'sizeLabel': sizeLabel
    });

  }
  editSize(sizeId: number, newSizeLabel: string): Observable<Object> {
    return this.http.put(`http://localhost:8080/sizes/${sizeId}`, {
      'sizeLabel': newSizeLabel
    });

  }

  deleteSize(sizeId: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/sizes/${sizeId}`);
  }

  addColor(color: Color): Observable<Object> {
    return this.http.post("http://localhost:8080/colors", {
      'color': color
    });
  }

  editColor(colorId: number, newColor: Color): Observable<Object> {
    return this.http.put(`http://localhost:8080/colors/${colorId}`, {
      'color': newColor
    });
  }

  deleteColor(colorId: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/colors/${colorId}`);
  }

  addBrand(name: string): Observable<Object> {
    return this.http.post("http://localhost:8080/brands", {
      'name': name
    });
  }
  editBrand(brandId: number, newBrandName: string): Observable<Object> {
    return this.http.put(`http://localhost:8080/brands/${brandId}`, {
      'name': newBrandName
    });
  }

  deleteBrand(brandId: number):Observable<string> {
    return this.http.delete<string>(`http://localhost:8080/brands/${brandId}`);
  }





}
