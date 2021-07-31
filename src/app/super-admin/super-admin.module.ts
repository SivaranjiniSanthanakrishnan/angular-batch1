import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { RolesComponent } from './roles/roles.component';
import { EditrolesComponent } from './editroles/editroles.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [RolesComponent, EditrolesComponent, TransactionComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ],
  exports: [RolesComponent, EditrolesComponent, TransactionComponent]
})
export class SuperAdminModule { }
