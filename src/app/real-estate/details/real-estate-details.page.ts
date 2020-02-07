import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealEstateDetailsModel } from './real-estate-details.model';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.page.html',
  styleUrls: [
    './styles/real-estate-details.page.scss',
    './styles/real-estate-details.shell.scss'
  ]
})
export class RealEstateDetailsPage implements OnInit {
  details: RealEstateDetailsModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const detailsDataStore = resolvedRouteData['data'];

      detailsDataStore.state.subscribe(
        (state) => {
          this.details = state;
        },
        (error) => {}
      );
    },
    (error) => {});
  }
}
