import { Component, OnInit } from '@angular/core';
import {NotesService} from "../notes.services";

interface listNotes{
  description: string,
  file: string,
  id: number,
  remark: string,
  sem: string,
  subject: string,
  subject_code: string,
  timestamp: string,
  user: number,
  year: string,
}

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.css']
})
export class GetnotesComponent implements OnInit {

  listNotes : listNotes[] = [];

  // imageUrl = 'http://localhost:8000/media/' + 'file';

  constructor(private notesService: NotesService) {
    this.getNotes();
  }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }



  getNotes(){
    this.notesService.listNotes().subscribe(response => {
      console.log(response);
      this.listNotes = response;
    })
  }
}
