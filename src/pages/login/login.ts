import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainTabsPage } from '../main-tabs/main-tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public loginForm: FormGroup;

    private userMock = {
        email: 'filipeffs10@gmail.com',
        password: '123456'
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
        this.buildLoginForm();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: [null, Validators.compose([
                Validators.required
            ])],
            password: [null, Validators.compose([
                Validators.required
            ])],
        });
    }

    public login(): void {
        // TODO: UNCOMMENT
        // if (!this.loginForm.valid) {
        //     let alert = this.alertCtrl.create({
        //         title: 'Campos em branco',
        //         message: 'Por favor preencha todos os campos antes de continuar.',
        //         buttons: ['ok']
        //     });
        //     alert.present();
        //     return;
        // }

        // if (this.loginForm.value.email != this.userMock.email || this.loginForm.value.password != this.userMock.password) {
        //     let alert = this.alertCtrl.create({
        //         title: 'Falha na autenticação',
        //         message: 'E-mail e/ou senha incorretos. Por favor tente novamete.',
        //         buttons: ['ok']
        //     });
        //     alert.present();
        //     return;
        // }

        this.navCtrl.push(MainTabsPage);
    }

}
