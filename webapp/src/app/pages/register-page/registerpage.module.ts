import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './registerpage.component';
import { RegisterRoutingModule } from './registerpage-routing.module';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [RegisterPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        RegisterRoutingModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ RegisterPageComponent ]
})

export class RegisterModule { }
