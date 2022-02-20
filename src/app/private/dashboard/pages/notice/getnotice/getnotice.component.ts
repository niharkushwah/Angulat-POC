import { Component, OnInit } from '@angular/core';
import {NoticeService} from "../notice.services";

interface listNotice{
  description: string,
  file: string,
  id: number,
  remark: string,
  timestamp: string,
  user: number,
}

@Component({
  selector: 'app-getnotice',
  templateUrl: './getnotice.component.html',
  styleUrls: ['./getnotice.component.css']
})
export class GetnoticeComponent implements OnInit {

  listNotice : listNotice[] = [];

  constructor(private noticeService: NoticeService) {
    this.getNotes();
  }

  ngOnInit(): void {
  }

  getNotes(){
    this.noticeService.listNotice().subscribe(response => {
      console.log(response);
      this.listNotice = response;
    })
  }
}
