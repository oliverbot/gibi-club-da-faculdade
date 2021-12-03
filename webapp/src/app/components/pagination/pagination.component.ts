import { Component, Input, OnInit, Output, EventEmitter  } from "@angular/core";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    actualPage: number = 1;

    @Output("currentPage") currentPage: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit() {}
    
}