export interface CategoryModel{
    id:number,
    name:string,
    description:string,
    imageURL:string,
    parentCategoryId:number | null
}
