import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditrolesComponent } from '../super-admin/editroles/editroles.component';
import { RolesComponent } from '../super-admin/roles/roles.component';
console.log("Super Admin Routing module")

const routes: Routes = [
  {
    path: 'super-admin', children: [
      {
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'editroles',
        component: EditrolesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
