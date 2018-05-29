import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-subscription',
    templateUrl: 'subscription.html',
})
export class SubscriptionPage {
    public subscriptionForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private formBuilder: FormBuilder
    ) {
        this.buildSubscriptionForm();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SubscriptionPage');
    }

    buildSubscriptionForm() {
        this.subscriptionForm = this.formBuilder.group({
            name: [null, Validators.compose([
                Validators.required
            ])],
            email: [null, Validators.compose([
                Validators.required
            ])],
            birthday : [null, Validators.compose([
                Validators.required
            ])],
            gender : [null, Validators.compose([
                Validators.required
            ])],
            password : [null, Validators.compose([
                Validators.required
            ])],
            passwordConfirmation : [null, Validators.compose([
                Validators.required
            ])],
        });
    }

    public subscribe(): void {
        if(!this.subscriptionForm.valid) {
            console.log('formulário inválido...');
        }
    }
}
