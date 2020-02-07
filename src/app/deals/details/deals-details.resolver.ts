import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DealsService } from '../deals.service';
import { DealsDetailsModel } from './deals-details.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class DealsDetailsResolver implements Resolve<any> {

  constructor(private dealsService: DealsService) {}

  resolve() {
    const dataSource: Observable<DealsDetailsModel> = this.dealsService.getDetailsDataSource();
    const dataStore: DataStore<DealsDetailsModel> = this.dealsService.getDetailsStore(dataSource);

    return dataStore;
  }
}
