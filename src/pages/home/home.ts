import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubscriptionPage } from '../subscription/subscription'
import { LoginPage } from '../login/login';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    public subscribe(): void {
        console.log('go to subscription page ...');
        this.navCtrl.push(SubscriptionPage);
    }

    public login(): void{
        this.navCtrl.push(LoginPage);
    }
}
