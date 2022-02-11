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
    formData.append('remark', 'abc');
    formData.append('description','abc');
    formData.append('subject','abc');
    formData.append('subject_code','abc');
    formData.append('year','abc');
    formData.append('sem','abc');
    return this.httpService
      .post(endpoint, formData);
  }

  uploadnotes(formData: uploadnotes): Observable<any> {
    return this.httpService.post('/notes/notes/', formData);
  }
}
