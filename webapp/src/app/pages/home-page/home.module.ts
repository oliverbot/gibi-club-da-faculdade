import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ HomeComponent ]
})

export class HomeModule { }
