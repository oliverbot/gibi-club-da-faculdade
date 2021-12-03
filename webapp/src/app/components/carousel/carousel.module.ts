import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
    declarations: [CarouselComponent],
    imports: [
        CommonModule,
        SharedModule.forRoot()
    ],
    providers: [
        HttpClient
    ],
    entryComponents: [ CarouselComponent ]
})

export class CarouselModule { }
