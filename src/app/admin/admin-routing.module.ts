import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditrolesComponent } from './editroles/editroles.component';
import { RolesComponent } from './roles/roles.component';

// const routes: Routes = [
//   {
//     path: 'admin', children: [
      // {
      //   path: 'roles',
      //   component: RolesComponent
      // },
      // {
      //   path: 'editroles',
      //   component: EditrolesComponent
      // }
//     ]
//   }
// ];
console.log("Admin Routing module")
const routes : Routes = [
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'editroles',
    component: EditrolesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
