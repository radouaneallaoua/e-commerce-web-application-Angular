import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SizesComponent } from './sizes/sizes.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    {
        path: "admin", component: AdminComponent, children: [
            { path: "dashboard", component: DashboardComponent },
            {
                path: "categories", component: CategoriesComponent, children: [
                    {
                        path: "", component: AllCategoriesComponent,
                    },
                    {
                        path: "add-category", component: AddCategoryComponent,
                    },
                    {
                        path: ":id/details", component: CategoryDetailsComponent,
                    }
                ]
            },
            {
                path: "products", component: ProductsComponent, children: [
                    {
                        path: "", component: AllProductsComponent,
                    },
                    {
                        path: "add-product", component: AddProductComponent,
                    },
                    {
                        path: ":id/details", component: ProductDetailsComponent,
                    }
                ]
            },
            { path: "orders", component: OrdersComponent },
            { path: "sizes", component: SizesComponent },
            { path: "brands", component: BrandsComponent },

        ]
    },
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: "admin", pathMatch: "full" },


];
