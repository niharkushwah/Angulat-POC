import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {uploadnotes} from "./uploadnotes/uploadnotes.component";
import {HttpService} from "../../../../services/http.service";

export interface UploadNoteInterface {
  remark:string;
  description:string;
  file:File|any;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService,) { }

  postFile(data: UploadNoteInterface|any): Observable<boolean> {
    const endpoint = '/notes/notes/';
    const formData: FormData = new FormData();
    formData.append('file', data.file, data.file.name);
    formData.append('remark', data.remark);
    formData.append('description', data.description);
    formData.append('subject',data.subject);
    formData.append('subject_code',data.subject_code);
    formData.append('year',data.year);
    formData.append('sem',data.sem);
    return this.httpService
      .post(endpoint, formData);
  }

  uploadnotes(formData: uploadnotes): Observable<any> {
    return this.httpService.post('/notes/notes/', formData);
  }
// for fetch notes
  listNotes(): Observable<any> {
    return this.httpService.get('/notes/notes/');
  }
}
