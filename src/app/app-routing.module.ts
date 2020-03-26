import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './client/homepage/homepage.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';




const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(
  //     m => m.AdminModule
  //   ),
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
