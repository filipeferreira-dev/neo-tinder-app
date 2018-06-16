import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-main-tabs',
    templateUrl: 'main-tabs.html',
})
export class MainTabsPage {

    // tab1Root = Page1;
    // tab2Root = Page2;
    // tab3Root = Page3;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MainTabsPage');
    }

}
