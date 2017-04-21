import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GuessNumberGameComponent } from './guess-number-game/guess-number-game.component';
import { GuessNumberGameOverviewComponent } from './guess-number-game/guess-number-game-overview/guess-number-game-overview.component';
import { IntroductionComponent } from './introduction-component/introduction-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidatorService } from './shared/services/services.service';
let storedUsers = JSON.parse(localStorage.getItem("users"));


const appRoutes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/login', component: LoginComponent},
  {path: 'login/guess-number-game', component: GuessNumberGameComponent}

];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GuessNumberGameComponent,
    GuessNumberGameOverviewComponent,
    IntroductionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
