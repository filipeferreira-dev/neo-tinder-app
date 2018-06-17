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
import { MainTabsPage } from '../pages/main-tabs/main-tabs';
import { HomeCatalogPage } from '../pages/home-catalog/home-catalog';
import { ChatPage } from '../pages/chat/chat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubscriptionPage,
    QuestionsAboutYouPage,
    ProfilePage,
    PublicProfilePage,
    LoginPage,
    MainTabsPage,
    HomeCatalogPage,
    ChatPage
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
    LoginPage,
    MainTabsPage,
    HomeCatalogPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
