import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserProfileModel } from './profile/user-profile.model';
import { UserFriendsModel } from './friends/user-friends.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class UserService {
  private profileDataStore: DataStore<UserProfileModel>;
  private friendsDataStore: DataStore<UserFriendsModel>;

  constructor(private http: HttpClient) { }

  public getProfileDataSource(): Observable<UserProfileModel> {
    return this.http.get<UserProfileModel>('./assets/sample-data/user/user-profile.json');
  }

  public getProfileStore(dataSource: Observable<UserProfileModel>): DataStore<UserProfileModel> {
    // Use cache if available
    if (!this.profileDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserProfileModel = new UserProfileModel();
      this.profileDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.profileDataStore.load(dataSource);
    }
    return this.profileDataStore;
  }

  public getFriendsDataSource(): Observable<UserFriendsModel> {
    return this.http.get<UserFriendsModel>('./assets/sample-data/user/user-friends.json');
  }

  public getFriendsStore(dataSource: Observable<UserFriendsModel>): DataStore<UserFriendsModel> {
    // Use cache if available
    if (!this.friendsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UserFriendsModel = new UserFriendsModel();
      this.friendsDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.friendsDataStore.load(dataSource);
    }
    return this.friendsDataStore;
  }

}
