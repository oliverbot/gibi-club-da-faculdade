import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import BaseService from './base.service';
import JumpIssue from '../models/jump-issue.model';

@Injectable({
  providedIn: 'root'
})

export class ComicService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  findLastAdded() {
    return this.get({ path : `/comics/recently-added/`})
  }

  findLastPublished() {
    return this.get({ path : `/comics/recently-published/`})
  }

  searchByName(name: String) {
    return this.get({ path : `/comics/search/byname/${name}`})
  }

   findJump(offset: Number) {
    let url = `https://comicvine.gamespot.com/api/issues/?api_key=358c9d2f82e6550d8fc8e0824c24b47fa4d84111&format=json&filter=volume:43519&sort=cover_date:asc&field_list=cover_date,issue_number,image,description&offset=${offset}`;
    return this.get({url})
  }

  postIssues(issues: Array<JumpIssue>) {
    console.log("aquiii")
    let url = `http://localhost:8080/jump`;
//    let notIssues: JumpIssue = new JumpIssue(1000,"aaaaa","bbbbb",'2015-10-10',new Date());
//    let arr: Array<JumpIssue> = new Array();
//    arr.push(notIssues);
    return this.post({ url: url, body: issues});
  } 

}
