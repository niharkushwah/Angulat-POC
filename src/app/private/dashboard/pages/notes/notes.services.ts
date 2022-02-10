import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {uploadnotes} from "./uploadnotes/uploadnotes.component";
import {HttpService} from "../../../../services/http.service";


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService,) { }

  uploadnotes(formData: uploadnotes): Observable<any> {
    return this.httpService.post('/notes/notes/', formData);
  }
}
