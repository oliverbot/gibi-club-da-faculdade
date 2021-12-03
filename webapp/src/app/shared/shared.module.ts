import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../components/header/header.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CardComponent } from '../components/card/card.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        IvyCarouselModule,
        NgxPaginationModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        CarouselComponent,
        CardComponent,
        PaginationComponent,
        LoginComponent,
        RegisterComponent,
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        CarouselComponent,
        CardComponent,
        LoginComponent,
        RegisterComponent,
        PaginationComponent,
        IvyCarouselModule,
        NgxPaginationModule,
        FontAwesomeModule
    ],
    entryComponents: [
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders<NgModule> {
        return {
            ngModule: SharedModule
        }
    }

}
