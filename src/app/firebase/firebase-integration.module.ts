import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ComponentsModule } from '../components/components.module';
import { environment } from '../../environments/environment';

import { FirebaseCreateUserModal } from './user/create/firebase-create-user.modal';
import { FirebaseUpdateUserModal } from './user/update/firebase-update-user.modal';
import { SelectUserImageModal } from './user/select-image/select-user-image.modal';

const firebaseRoutes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./listing/firebase-listing.module').then(m => m.FirebaseListingPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./user/details/firebase-user-details.module').then(m => m.FirebaseUserDetailsPageModule)
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(firebaseRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents: [
    FirebaseCreateUserModal,
    FirebaseUpdateUserModal,
    SelectUserImageModal
  ],
  declarations: [
    FirebaseCreateUserModal,
    FirebaseUpdateUserModal,
    SelectUserImageModal
  ]
})
export class FirebaseIntegrationModule {}
