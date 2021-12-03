import { Component, Input, OnInit } from "@angular/core";
import Card from "src/app/models/card.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @Input("content") card: Card = new Card();

    constructor() {}

    ngOnInit() {

    }
    
}