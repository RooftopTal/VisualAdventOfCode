import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    CdkAccordionModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}
