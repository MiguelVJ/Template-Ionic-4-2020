import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TravelService } from '../travel.service';
import { TravelDetailsModel } from '../details/travel-details.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class TravelDetailsResolver implements Resolve<any> {

  constructor(private travelService: TravelService) {}

  resolve() {
    const dataSource: Observable<TravelDetailsModel> = this.travelService.getDetailsDataSource();
    const dataStore: DataStore<TravelDetailsModel> = this.travelService.getDetailsStore(dataSource);

    return dataStore;
  }
}
