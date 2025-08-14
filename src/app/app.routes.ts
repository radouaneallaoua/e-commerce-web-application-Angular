import {Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoriesComponent} from './pages/category/categories/categories.component';
import {ProductsComponent} from './pages/product/products/products.component';
import {OrdersComponent} from './pages/order/orders/orders.component';
import {LoginComponent} from './pages/login/login.component';
import {SizesComponent} from './pages/size/sizes/sizes.component';
import {BrandsComponent} from './pages/brand/brands/brands.component';
import {CategoryDetailsComponent} from './pages/category/category-details/category-details.component';
import {ProductDetailsComponent} from './pages/product/product-details/product-details.component';
import {AllCategoriesComponent} from './pages/category/all-categories/all-categories.component';
import {AllProductsComponent} from './pages/product/all-products/all-products.component';
import {AddCategoryComponent} from './pages/category/add-category/add-category.component';
import {AddProductComponent} from './pages/product/add-product/add-product.component';
import {UpdateCategoryComponent} from './pages/category/update-category/update-category.component';
import {UsersComponent} from './pages/user/users/users.component';

export const routes: Routes = [
  {
    path: "admin", component: AdminComponent, children: [
      {path: "dashboard", component: DashboardComponent},
      {
        path: "categories", component: CategoriesComponent, children: [
          {
            path: "", component: AllCategoriesComponent,
          },
          {
            path: "add-category", component: AddCategoryComponent,
          },
          {
            path: ":category/update", component: UpdateCategoryComponent,
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
      {path: "orders", component: OrdersComponent},
      {path: "sizes", component: SizesComponent},
      {path: "brands", component: BrandsComponent},
      {path: "users", component: UsersComponent},

    ]
  },
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "admin/dashboard", pathMatch: "full"},


];
