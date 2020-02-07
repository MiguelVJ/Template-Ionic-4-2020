import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RealEstateListingModel } from './listing/real-estate-listing.model';
import { RealEstateDetailsModel } from './details/real-estate-details.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class RealEstateService {
  private listingDataStore: DataStore<RealEstateListingModel>;
  private detailsDataStore: DataStore<RealEstateDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<RealEstateListingModel> {
    return this.http.get<RealEstateListingModel>('./assets/sample-data/real-estate/listing.json');
  }

  public getListingStore(dataSource: Observable<RealEstateListingModel>): DataStore<RealEstateListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RealEstateListingModel = new RealEstateListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<RealEstateDetailsModel> {
    return this.http.get<RealEstateDetailsModel>('./assets/sample-data/real-estate/details.json');
  }

  public getDetailsStore(dataSource: Observable<RealEstateDetailsModel>): DataStore<RealEstateDetailsModel> {
    // Use cache if available
    if (!this.detailsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RealEstateDetailsModel = new RealEstateDetailsModel();
      this.detailsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.detailsDataStore.load(dataSource);
    }
    return this.detailsDataStore;
  }
}
