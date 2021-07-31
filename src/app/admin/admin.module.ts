import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RolesComponent } from './roles/roles.component';
import { EditrolesComponent } from './editroles/editroles.component';

console.log('admin module');
@NgModule({
  declarations: [RolesComponent, EditrolesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [RolesComponent, EditrolesComponent]
})
export class AdminModule { }
