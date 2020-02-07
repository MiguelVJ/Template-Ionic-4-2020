import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { VideoPlaylistModel } from './video-playlist.model';
import { DataStore } from '../shell/data-store';

@Injectable()
export class VideoPlaylistService {

  private videoPlaylistDataStore: DataStore<VideoPlaylistModel>;

  constructor(private http: HttpClient) { }

  public getVideoPlaylistDataSource(): Observable<VideoPlaylistModel> {
    return this.http.get<VideoPlaylistModel>('./assets/sample-data/video-playlist/video-playlist.json');
  }

  public getVideoPlaylistStore(dataSource: Observable<VideoPlaylistModel>): DataStore<VideoPlaylistModel> {
    // Use cache if available
    if (!this.videoPlaylistDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: VideoPlaylistModel = new VideoPlaylistModel();
      this.videoPlaylistDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.videoPlaylistDataStore.load(dataSource);
    }
    return this.videoPlaylistDataStore;
  }
}
