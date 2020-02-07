import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RealEstateService } from '../real-estate.service';
import { RealEstateListingModel } from '../listing/real-estate-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class RealEstateListingResolver implements Resolve<any> {

  constructor(private realEstateService: RealEstateService) {}

  resolve() {
    const dataSource: Observable<RealEstateListingModel> = this.realEstateService.getListingDataSource();
    const dataStore: DataStore<RealEstateListingModel> = this.realEstateService.getListingStore(dataSource);

    return dataStore;
  }
}
