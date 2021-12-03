import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Card from 'src/app/models/card.model';
import { ComicService } from 'src/app/services/comic.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { faAngleDown, faBook, faCaretDown, faCaretSquareDown, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-login-page',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.scss']
})

export class LoginPageComponent implements OnInit {

    pageOfComics: Array<Card> = [];

    p: number = 1;
    searchValue: String = '';

    faCoffee = faCoffee;
    faBook = faBook;
    faSearch = faSearch;
    faCaretDown = faCaretDown;

    constructor(private comic_svc: ComicService) { }

    ngOnInit() {
        this.loadPageOfComics()
    }

    async loadPageOfComics(name: String = '') {
        if (name == '') {
            this.pageOfComics = await this.comic_svc.findLastAdded().toPromise();
        } else {
            this.pageOfComics = await this.comic_svc.searchByName(name).toPromise();
        }
    }


}
