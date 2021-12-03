import { Component, Input, OnInit } from "@angular/core";
import Card from "src/app/models/card.model";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    @Input("content") card: Card = new Card();

    constructor() {}

    ngOnInit() {

    }
    
}