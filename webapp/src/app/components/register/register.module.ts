import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ RegisterComponent ]
})

export class RegisterModule { }
