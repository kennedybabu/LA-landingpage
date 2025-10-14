import { Routes } from '@angular/router';
import { VslaComponent } from './projects/vsla/vsla.component';
import { HomeComponent } from './projects/home/home.component';
import { MisComponent } from './projects/mis/mis.component';
import { EGroupComponent } from './projects/e-group/e-group.component';
import { AgriTradeComponent } from './projects/agri-trade/agri-trade.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'vsla', component: VslaComponent
    },
    {
        path: 'mis' , component: MisComponent
    },
    {
        path: 'e-group' , component: EGroupComponent
    }, 
    {
        path: 'agri-trade', component: AgriTradeComponent
    }
];
