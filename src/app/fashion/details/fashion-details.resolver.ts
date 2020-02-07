import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FashionService } from '../fashion.service';
import { FashionDetailsModel } from '../details/fashion-details.model';
import { DataStore } from '../../shell/data-store';
import { Observable } from 'rxjs';

@Injectable()
export class FashionDetailsResolver implements Resolve<any> {

  constructor(private fashionService: FashionService) {}

  resolve() {
    const dataSource: Observable<FashionDetailsModel> = this.fashionService.getDetailsDataSource();
    const dataStore: DataStore<FashionDetailsModel> = this.fashionService.getDetailsStore(dataSource);

    return dataStore;
  }
}
