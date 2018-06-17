import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { HomeCatalogPage } from '../home-catalog/home-catalog';
import { PublicProfilePage } from '../public-profile/public-profile';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the MainTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-main-tabs',
    templateUrl: 'main-tabs.html',
})
export class MainTabsPage {
    tab1Root = HomeCatalogPage;
    tab2Root = ChatPage;
    tab3Root = PublicProfilePage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

}
