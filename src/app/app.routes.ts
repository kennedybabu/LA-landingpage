import { Routes } from '@angular/router';
import { VslaComponent } from './projects/vsla/vsla.component';
import { HomeComponent } from './projects/home/home.component';
import { MisComponent } from './projects/mis/mis.component';
import { EGroupComponent } from './projects/e-group/e-group.component';
import { AgriTradeComponent } from './projects/agri-trade/agri-trade.component';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./projects/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'vsla', 
        loadComponent: () => import('./projects/vsla/vsla.component').then(m => m.VslaComponent)
    },
    {
        path: 'mis', 
        loadComponent: () => import('./projects/mis/mis.component').then(m => m.MisComponent)
    },
    {
        path: 'e-group', 
        loadComponent: () => import('./projects/e-group/e-group.component').then(m => m.EGroupComponent)
    }, 
    {
        path: 'agri-trade', 
        loadComponent: () => import('./projects/agri-trade/agri-trade.component').then(m => m.AgriTradeComponent)
    }
];
