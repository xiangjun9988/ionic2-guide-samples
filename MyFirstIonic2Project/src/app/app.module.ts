import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppAboutPage } from '../pages/app-about/app-about';
import { ListSamplePage } from '../pages/list-sample/list-sample';
import { PipeSamplePage } from '../pages/pipe-sample/pipe-sample';
import { WelcomeComponent } from '../components/welcome/welcome';
import { MyWelcomeComponent } from '../components/my-welcome/my-welcome';
import { Level } from '../pipes/level';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppAboutPage,
    ListSamplePage,
    PipeSamplePage,
    WelcomeComponent,
    MyWelcomeComponent,
    Level
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppAboutPage,
    ListSamplePage,
    PipeSamplePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
