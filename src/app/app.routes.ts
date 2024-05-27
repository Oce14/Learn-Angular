import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageFruitsComponent } from './components/manage-fruits/manage-fruits.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent,
    },
    {
        path:'fruits',
        component: ManageFruitsComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
];
