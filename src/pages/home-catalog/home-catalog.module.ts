import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCatalogPage } from './home-catalog';

@NgModule({
  declarations: [
    HomeCatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCatalogPage),
  ],
})
export class HomeCatalogPageModule {}
