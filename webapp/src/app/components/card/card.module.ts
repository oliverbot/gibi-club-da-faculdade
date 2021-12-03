import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ CardComponent ]
})

export class CardModule { }
