import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '', component: BaselayoutComponent, children: [
            { path: '', component: HomepageComponent },
            { path: 'about', component: AboutComponent },
            { path: 'product/:id', component: ProductDetailComponent },
        ]
    },
    {
        path: 'admin', component: AdminlayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'product', component: ProductListComponent },
            { path: 'product/add', component: ProductAddComponent },
            { path: 'product/:id/edit', component: ProductEditComponent },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
