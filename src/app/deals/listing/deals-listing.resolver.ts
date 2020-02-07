import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DealsService } from '../deals.service';
import { DealsListingModel } from './deals-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class DealsListingResolver implements Resolve<any> {

  constructor(private dealsService: DealsService) {}

  resolve() {
    const dataSource: Observable<DealsListingModel> = this.dealsService.getListingDataSource();
    const dataStore: DataStore<DealsListingModel> = this.dealsService.getListingStore(dataSource);

    return dataStore;
  }
}
