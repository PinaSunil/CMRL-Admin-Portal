import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadComponent: () =>
      import(`../pages/login-page/login-page.component`).then(
        (c) => c.LoginPageComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import(`../pages/home-page/home-page.component`).then(
        (c) => c.HomePageComponent
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(`../pages/dashboard/dashboard.component`).then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'services',
        loadComponent: () =>
          import(`../pages/services/services.component`).then(
            (c) => c.ServicesComponent
          ),
      },

      {
        path: 'shiftEnd',
        loadComponent: () =>
          import(`../pages/reports/shift-end-page/shift-end-page.component`).then(
            (c) => c.ShiftEndPageComponent
          ),
      },

      {
        path: 'transactionDataQuery',
        loadComponent: () =>
          import(
            `../pages/reports/transaction-data-query/transaction-data-query.component`
          ).then((c) => c.TransactionDataQueryComponent),
      },
    ],
  },
];
