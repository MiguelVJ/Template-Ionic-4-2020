import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TravelListingModel } from './travel-listing.model';

@Component({
  selector: 'app-travel-listing',
  templateUrl: './travel-listing.page.html',
  styleUrls: [
    './styles/travel-listing.page.scss',
    './styles/travel-listing.shell.scss'
  ]
})
export class TravelListingPage implements OnInit {
  listing: TravelListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const listingDataStore = resolvedRouteData['data'];

      listingDataStore.state.subscribe(
        (state) => {
          this.listing = state;
        },
        (error) => {}
      );
    },
    (error) => {});
  }
}
