import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FashionListingModel } from './listing/fashion-listing.model';
import { FashionDetailsModel } from './details/fashion-details.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class FashionService {
  private listingDataStore: DataStore<FashionListingModel>;
  private detailsDataStore: DataStore<FashionDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<FashionListingModel> {
    return this.http.get<FashionListingModel>('./assets/sample-data/fashion/listing.json');
  }

  public getListingStore(dataSource: Observable<FashionListingModel>): DataStore<FashionListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: FashionListingModel = new FashionListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<FashionDetailsModel> {
    return this.http.get<FashionDetailsModel>('./assets/sample-data/fashion/details.json');
  }

  public getDetailsStore(dataSource: Observable<FashionDetailsModel>): DataStore<FashionDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: FashionDetailsModel = new FashionDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }

}
