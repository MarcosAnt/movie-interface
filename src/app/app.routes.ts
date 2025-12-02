import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard').then(c => c.Dashboard)},
  {path: 'movie-list', loadComponent: () => import('./components/movie-list/movie-list').then(c => c.MovieList)},
  {path: '**', redirectTo: '/'}
];
