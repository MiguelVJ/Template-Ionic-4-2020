import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TravelService } from '../travel.service';
import { TravelListingModel } from '../listing/travel-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class TravelListingResolver implements Resolve<any> {

  constructor(private travelService: TravelService) {}

  resolve() {
    const dataSource: Observable<TravelListingModel> = this.travelService.getListingDataSource();
    const dataStore: DataStore<TravelListingModel> = this.travelService.getListingStore(dataSource);

    return dataStore;
  }
}
