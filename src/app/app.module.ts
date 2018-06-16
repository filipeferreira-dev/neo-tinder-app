import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { QuestionsAboutYouPage } from '../pages/questions-about-you/questions-about-you';
import { ProfilePage } from '../pages/profile/profile';
import { PublicProfilePage } from '../pages/public-profile/public-profile';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubscriptionPage,
    QuestionsAboutYouPage,
    ProfilePage,
    PublicProfilePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubscriptionPage,
    QuestionsAboutYouPage,
    ProfilePage,
    PublicProfilePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
