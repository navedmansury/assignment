import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinkPage } from './tablink.page';

const routes: Routes = [
  {
    path: 'tablink',
    component: TablinkPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../add/add.module').then(m => m.AddPageModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('../edit/edit.module').then(m => m.EditPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: '',
        redirectTo: '/tablink/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablink/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinkPageRoutingModule { }
