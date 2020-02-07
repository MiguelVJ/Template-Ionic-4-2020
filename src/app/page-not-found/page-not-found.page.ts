import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: [
    './styles/page-not-found.page.scss'
  ]
})
export class PageNotFound implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit(): void {
    this.menu.enable(false);
  }
}
