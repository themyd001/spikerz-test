import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '**',
        loadComponent: () =>
          import('./domain/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
];
