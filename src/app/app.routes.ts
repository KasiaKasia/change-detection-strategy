import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
}, {
    path: 'example',
    loadChildren: () => import('./example/example.module').then(m => m.ExampleModule)
}];
