import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Question } from './question-model';
import { ProfilePage } from '../profile/profile';

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
    public questions: Array<Question> = [
        new Question('Qual é o primeiro encontro ideal para você ?', ['Balada', 'Barzinho', 'Cinema', 'Jantar romântico',])
        , new Question('Gosta de bixinhos de estimação ?', ['Sim', 'Não', 'Prefiro Gatos', 'Prefiro Cachorros'])
        , new Question('Qual tipo de música você escuta ?',['Pop', 'Eletrônica', 'Rap', 'HipHop', 'Samba', 'Pagode', 'Sertanejo', 'Rock'])
    ];

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
        console.log(this.questions);
    }

    public submit(): void{
        this.navCtrl.push(ProfilePage);
    }

}
