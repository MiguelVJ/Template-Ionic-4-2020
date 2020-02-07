import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserProfileModel } from './user-profile.model';
import { AlertController } from '@ionic/angular';

import { LanguageService } from '../../language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: [
    './styles/user-profile.page.scss',
    './styles/user-profile.shell.scss',
    './styles/user-profile.ios.scss',
    './styles/user-profile.md.scss'
  ],
})
export class UserProfilePage implements OnInit {
  profile: UserProfileModel;
  available_languages = [];
  translations;

  @HostBinding('class.is-shell') get isShell() {
    return (this.profile && this.profile.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    public languageService: LanguageService,
    public alertController: AlertController
  ) { }


  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const profileDataStore = resolvedRouteData['data'];

      profileDataStore.state.subscribe(
        (state) => {
          this.profile = state;

          // get translations for this page to use in the Language Chooser Alert
          this.getTranslations();

          this.translate.onLangChange.subscribe(() => {
            this.getTranslations();
          });
        },
        (error) => {}
      );
    },
    (error) => {});
  }

  getTranslations() {
    // get translations for this page to use in the Language Chooser Alert
    this.translate.getTranslation(this.translate.currentLang)
    .subscribe((translations) => {
      this.translations = translations;
    });
  }

  async openLanguageChooser() {
    this.available_languages = this.languageService.getLanguages()
    .map(item =>
      ({
        name: item.name,
        type: 'radio',
        label: item.name,
        value: item.code,
        checked: item.code === this.translate.currentLang
      })
    );

    const alert = await this.alertController.create({
      header: this.translations.SELECT_LANGUAGE,
      inputs: this.available_languages,
      cssClass: 'language-alert',
      buttons: [
        {
          text: this.translations.CANCEL,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: this.translations.OK,
          handler: (data) => {
            if (data) {
              this.translate.use(data);
            }
          }
        }
      ]
    });
    await alert.present();

  }
}
