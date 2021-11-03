import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [
    {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '820784307770-i93hleabhs6nvi70elqts0qkflhfsvdk.apps.googleusercontent.com'
              )
            }
          ]
        } as SocialAuthServiceConfig,
      }
  ],
  exports: []
})
export class AuthModule { }
