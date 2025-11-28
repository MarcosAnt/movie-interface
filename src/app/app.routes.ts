import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '/dashboard', loadChildren: () => import('./component/dashboard/dashboard').then(m => m.Dashboard)},
  {path: '**', redirectTo: '/'}
];
