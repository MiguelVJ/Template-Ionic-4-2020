import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../user.service';
import { UserFriendsModel } from './user-friends.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class UserFriendsResolver implements Resolve<any> {

  constructor(private userService: UserService) { }

  resolve() {
    const dataSource: Observable<UserFriendsModel> = this.userService.getFriendsDataSource();
    const dataStore: DataStore<UserFriendsModel> = this.userService.getFriendsStore(dataSource);

    return dataStore;
  }
}
