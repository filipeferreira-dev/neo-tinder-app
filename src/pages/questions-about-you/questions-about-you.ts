import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the QuestionsAboutYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-questions-about-you',
    templateUrl: 'questions-about-you.html',
})
export class QuestionsAboutYouPage {

    public aboutYouForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
        this.buildForm();
    }

    private buildForm(): void {
        this.aboutYouForm = this.formBuilder.group({
            question1: [null, Validators.compose([
                Validators.required
            ])]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad QuestionsAboutYouPage');
    }

}
