import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { flatMap} from 'rxjs/operators';

import { FoodListingModel } from './listing/food-listing.model';
import { FoodDetailsModel } from './details/food-details.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class FoodService {

  private listingDataStore: DataStore<FoodListingModel>;
  private detailsDataStore: DataStore<FoodDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<FoodListingModel> {
    return this.http.get<FoodListingModel>('./assets/sample-data/food/listing.json');
  }

  public getListingStore(dataSource: Observable<FoodListingModel>): DataStore<FoodListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: FoodListingModel = new FoodListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<FoodDetailsModel> {
    return this.http.get<{items: Array<FoodDetailsModel>}>('./assets/sample-data/food/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug))
    );
  }

  public getDetailsStore(dataSource: Observable<FoodDetailsModel>): DataStore<FoodDetailsModel> {

    // Initialize the model specifying that it is a shell model
    const shellModel: FoodDetailsModel = new FoodDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
