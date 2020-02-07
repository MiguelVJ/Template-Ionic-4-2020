import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { FoodDetailsModel } from './food-details.model';

@Injectable()
export class FoodDetailsResolver implements Resolve<any> {

  constructor(private foodService: FoodService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<FoodDetailsModel> = this.foodService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<FoodDetailsModel> = this.foodService.getDetailsStore(dataSource);

    return dataStore;
  }
}
