import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { FoodDetailsPage } from './food-details.page';
import { FoodDetailsResolver } from './food-details.resolver';
import { FoodService } from '../food.service';

const routes: Routes = [
  {
    path: '',
    component: FoodDetailsPage,
    resolve: {
      data: FoodDetailsResolver
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
    PipesModule,
    HttpClientModule
  ],
  declarations: [
    FoodDetailsPage
  ],
  providers: [
    FoodDetailsResolver,
    FoodService
  ]
})
export class FoodDetailsPageModule {}
