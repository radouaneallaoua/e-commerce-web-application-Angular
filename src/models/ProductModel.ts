import { BrandModel } from './BrandModel';
import { ProductColorModel } from './ProductColorModel';
import { ProductSizeModel } from './ProductSizeModel';
import { ProductImageModel } from './ProductImageModel';
import { EvaluationModel } from './EvaluationModel';
import { ReactionModel } from './ReactionModel';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  stock: number;
  categoryId: number;
  brand: BrandModel;
  productColorList: ProductColorModel[];
  productSizeList: ProductSizeModel[];
  productImageList: ProductImageModel[];
  evaluations: EvaluationModel[];
  reactions: ReactionModel[];
}