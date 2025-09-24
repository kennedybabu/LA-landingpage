import { Routes } from '@angular/router';
import { VslaComponent } from './projects/vsla/vsla.component';
import { HomeComponent } from './projects/home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'vsla', component: VslaComponent
    }
];
