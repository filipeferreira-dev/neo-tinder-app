import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';

import { QuestionsAboutYouPage } from './questions-about-you';

@NgModule({
  declarations: [
    QuestionsAboutYouPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionsAboutYouPage),
  ],
})
export class QuestionsAboutYouPageModule {

}
