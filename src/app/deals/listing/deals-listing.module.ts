import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { DealsListingPage } from './deals-listing.page';
import { DealsListingResolver } from './deals-listing.resolver';
import { DealsService } from '../deals.service';

const routes: Routes = [
  {
    path: '',
    component: DealsListingPage,
    resolve: {
      data: DealsListingResolver
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
    DealsListingPage
  ],
  providers: [
    DealsListingResolver,
    DealsService
  ]
})
export class DealsListingPageModule {}
