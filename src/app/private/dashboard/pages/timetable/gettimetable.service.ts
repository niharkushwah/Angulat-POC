import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../../../services/http.service";
import {uploadtimetable} from "./uploadtimetable/uploadtimetable.component";

export interface UploadTimeTableInterface {
  remark:string;
  description:string;
  tittle:string;
  file:File|any;
}

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  constructor(private httpService: HttpService,) { }

  postFile(data: uploadtimetable|any): Observable<boolean> {
    const endpoint = '/timetable/timetable/';
    const formData: FormData = new FormData();
    formData.append('file', data.file, data.file.name);
    formData.append('tittle', data.tittle);
    formData.append('description', data.description);
    formData.append('year',data.year);
    return this.httpService
      .post(endpoint, formData);
  }

  uploadTimeTable(formData: uploadtimetable): Observable<any> {
    return this.httpService.post('/timetable/timetable/', formData);
  }
// for fetch notes
  listTimeTable(): Observable<any> {
    return this.httpService.get('/timetable/timetable/');
  }
}
