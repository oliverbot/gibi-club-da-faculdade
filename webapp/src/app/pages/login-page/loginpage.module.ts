import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './loginpage.component';
import { LoginRoutingModule } from './loginpage-routing.module';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ LoginPageComponent ]
})

export class LoginModule { }
