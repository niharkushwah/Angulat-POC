import { Component, OnInit } from '@angular/core';
import {TimeTableService} from "../gettimetable.service";

interface listTimeTable{
  description: string,
  file: string,
  id: number,
  remark: string,
  timestamp: string,
  user: number,
  year: string,
  tittle: string,
}


@Component({
  selector: 'app-gettimetable',
  templateUrl: './gettimetable.component.html',
  styleUrls: ['./gettimetable.component.css']
})
export class GettimetableComponent implements OnInit {

  listTimeTable : listTimeTable[] = [];


  constructor(private notesService: TimeTableService) {
    this.getTimeTable();
  }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }


  getTimeTable(){
    this.notesService.listTimeTable().subscribe(response => {
      console.log(response);
      this.listTimeTable = response;
    })
  }
}
