import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RealEstateService } from '../real-estate.service';
import { RealEstateDetailsModel } from '../details/real-estate-details.model';
import { DataStore } from '../../shell/data-store';
import { Observable } from 'rxjs';

@Injectable()
export class RealEstateDetailsResolver implements Resolve<any> {

  constructor(private realEstateService: RealEstateService) {}

  resolve() {
    const dataSource: Observable<RealEstateDetailsModel> = this.realEstateService.getDetailsDataSource();
    const dataStore: DataStore<RealEstateDetailsModel> = this.realEstateService.getDetailsStore(dataSource);

    return dataStore;
  }
}
