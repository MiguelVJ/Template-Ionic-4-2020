import { Component, OnInit, HostBinding } from '@angular/core';
import { FirebaseService } from '../../firebase-integration.service';
import { ModalController } from '@ionic/angular';

import { UserImageModel } from './user-image.model';
import { ShellModel } from '../../../shell/data-store';

@Component({
  selector: 'app-select-user-image',
  templateUrl: './select-user-image.modal.html',
  styleUrls: [
    './styles/select-user-image.modal.scss',
    './styles/select-user-image.shell.scss'
  ]
})
export class SelectUserImageModal implements OnInit {
  // Use Typescript intersection types to enable docorating the Array of firebase models with a shell model
  // (ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
  avatars: Array<UserImageModel> & ShellModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.avatars && this.avatars.isShell) ? true : false;
  }

  constructor(
    private modalController: ModalController,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    const dataSource = this.firebaseService.getAvatarsDataSource();
    const dataStore = this.firebaseService.getAvatarsStore(dataSource);

    dataStore.state.subscribe(
      (state) => {
        this.avatars = state;
      },
      (error) => {}
    );
  }

  dismissModal(avatar?: UserImageModel) {
    this.modalController.dismiss(avatar);
  }
}
