import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { FoodListingModel } from './food-listing.model';

@Injectable()
export class FoodListingResolver implements Resolve<any> {

  constructor(private foodService: FoodService) {}

  resolve() {
    const dataSource: Observable<FoodListingModel> = this.foodService.getListingDataSource();
    const dataStore: DataStore<FoodListingModel> = this.foodService.getListingStore(dataSource);

    return dataStore;
  }
}
