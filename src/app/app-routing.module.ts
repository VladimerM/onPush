import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full',
  },
  {
    path: 'default',
    loadChildren: () =>
      import('./default/part-on-push.module').then(
        (m) => m.PartOnPushModule
      ),
  },
  {
    path: 'some-on-push',
    loadChildren: () =>
      import('./partOnPush/part-on-push.module').then(
        (m) => m.PartOnPushModule
      ),
  },
  {
    path: 'on-push',
    loadChildren: () =>
      import('./onPush/part-on-push.module').then(
        (m) => m.PartOnPushModule
      ),
  },
  {
    path: '**',
    redirectTo: 'some-on-push',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
