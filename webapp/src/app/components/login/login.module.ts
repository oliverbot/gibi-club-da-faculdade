import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ LoginComponent ]
})

export class LoginModule { }
