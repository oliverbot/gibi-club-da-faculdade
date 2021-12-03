import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Card from 'src/app/models/card.model';
import { ComicService } from 'src/app/services/comic.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import JumpIssue from 'src/app/models/jump-issue.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    lastAddedComics: Array<Card> = [];
    lastPublishedComics: Array<Card> = [];

    CONFIG_FOR_COMIC_CARDS: Record<string, any> = { "height": 480, "width": 1245, "autoplay": true, "pauseOnHover": true };

    listJump: Array<JumpIssue> = [];

    constructor(private comic_svc: ComicService) { }

    async ngOnInit() {

        this.loadLastAddedComics();
        this.loadLastPublishedComics()
        //await this.processJumpIssues();
        //,await this.saveIssues(this.listJump);
    }

    async loadLastAddedComics() {
        this.lastAddedComics = await this.comic_svc.findLastAdded().toPromise();
    }

    async loadLastPublishedComics() {
        this.lastPublishedComics = await this.comic_svc.findLastPublished().toPromise();
    }

    async loveRalycia() {
        
    }
    async loadJump(offset: Number) {
        const response = await this.comic_svc.findJump(offset).toPromise();

        const result: Array<JumpIssue> = response.results;

        await this.findIssues(result)

    }

    async findIssues(issues: Array<JumpIssue>) {
        issues.map( async (issueFromComicVineApi : any) => {
            /* ObjectBuilder.new<JumpIssue>()
                .with("issueNumber", issueFromComicVineApi.issue_number)
                .with("coverDate", issueFromComicVineApi.cover_date)
                .with("coverImageUrl", issueFromComicVineApi.image.original_url)
                .with("description", issueFromComicVineApi.description)
                .with("createdAt", new Date()).build(); */

            let issue = new JumpIssue(issueFromComicVineApi.issue_number, 
                                        issueFromComicVineApi.description, 
                                        issueFromComicVineApi.image.original_url, 
                                        issueFromComicVineApi.cover_date);
            await this.listJump.push(issue)
        })
    }

    async processJumpIssues() {
        for (let i = 0; i < 2600; i += 100) {
            await this.loadJump(i);
        }
    }

    async saveIssues(issues: Array<JumpIssue>) {
        await this.comic_svc.postIssues(issues).toPromise();
    }


}
