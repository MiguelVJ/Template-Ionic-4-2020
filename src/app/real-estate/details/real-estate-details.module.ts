import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { RealEstateDetailsPage } from './real-estate-details.page';
import { RealEstateDetailsResolver } from './real-estate-details.resolver';
import { RealEstateService } from '../real-estate.service';

const routes: Routes = [
  {
    path: '',
    component: RealEstateDetailsPage,
    resolve: {
      data: RealEstateDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [
    RealEstateDetailsPage
  ],
  providers: [
    RealEstateDetailsResolver,
    RealEstateService
  ]
})
export class RealEstateDetailsPageModule {}
