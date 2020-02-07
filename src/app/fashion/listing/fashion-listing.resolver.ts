import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FashionService } from '../fashion.service';
import { FashionListingModel } from '../listing/fashion-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class FashionListingResolver implements Resolve<any> {

  constructor(private fashionService: FashionService) {}

  resolve() {
    const dataSource: Observable<FashionListingModel> = this.fashionService.getListingDataSource();
    const dataStore: DataStore<FashionListingModel> = this.fashionService.getListingStore(dataSource);

    return dataStore;
  }
}
