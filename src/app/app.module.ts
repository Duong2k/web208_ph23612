import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
@NgModule({
    declarations: [
        AppComponent,
        ProductAddComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductListComponent,
        HomepageComponent,
        AboutComponent,
        PageNotFoundComponent,
        DashboardComponent,
        BaselayoutComponent,
        AdminlayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
