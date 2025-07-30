export interface ProductCommentModel {
  id: number;
  content: string;
  publicationDate: string; // Consider using Date type for date fields if parsing dates
  productId: number;
  userId: string;
  parentCommentId?: number; // Optional if there are root comments without a parent
  childCommentIds: number[];
}