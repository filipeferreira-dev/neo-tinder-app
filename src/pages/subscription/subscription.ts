import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionsAboutYouPage } from '../questions-about-you/questions-about-you';
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
        private formBuilder: FormBuilder,
        private alertCtrl: AlertController
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
        // if(!this.subscriptionForm.valid) {
        //     let alert = this.alertCtrl.create({
        //         title: 'Campos em branco',
        //         message: 'Por favor preencha todos os campos antes de continuar.',
        //         buttons: ['ok']
        //       });
        //       alert.present();
        //       return;
        // }

        this.navCtrl.push(QuestionsAboutYouPage);
    }
}
