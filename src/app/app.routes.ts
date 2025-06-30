import { Routes } from '@angular/router';
import { ReceiptsComponent } from './components/receipts/receipts.component';
import { ServicesComponent } from './components/services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RicettarioComponent } from './components/ricettario/ricettario.component';
import { DbComponent } from './components/db/db.component';

export const routes: Routes = [
    { path: 'servizi', component: ServicesComponent},
    { path: 'ricette', component: RicettarioComponent },
    { path: 'home', component: DashboardComponent },
    { path: 'chi-sono', component: AboutComponent },
    { path: 'db', component: DbComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];
