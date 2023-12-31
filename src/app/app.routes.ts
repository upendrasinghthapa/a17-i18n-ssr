import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'product', loadComponent: () => import("./feature/product/product.component").then(x => x.ProductComponent) },
    { path: 'foo', loadComponent: () => import("./feature/foo/foo.component").then(x => x.FooComponent) },
    { path: 'bar', loadComponent: () => import("./feature/bar/bar.component").then(x => x.BarComponent) },
    { path: '**', redirectTo: "", pathMatch: 'full' }
];
