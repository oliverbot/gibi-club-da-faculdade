import { Component, Input, OnInit } from "@angular/core";
import Card from "src/app/models/card.model";
import { ComicService } from "src/app/services/comic.service";

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    @Input("contents") contents: Array<any> = [];

    @Input("config") config: Record<string, any> = {}

    constructor() {}

    ngOnInit() {

    }
    
}