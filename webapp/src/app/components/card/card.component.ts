import { Component, Input, OnInit } from "@angular/core";
import Card from "src/app/models/card.model";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input("content") card: Card = new Card();

    constructor() {}

    ngOnInit() {

    }
    
}