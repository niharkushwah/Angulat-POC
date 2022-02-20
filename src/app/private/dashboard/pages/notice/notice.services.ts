import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../../../services/http.service";
import {uploadnotice} from "./uploadnotice/uploadnotice.component";

export interface UploadNoticeInterface {
  remark:string;
  description:string;
  file:File|any;
}

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private httpService: HttpService, ) { }

  postFile(data: UploadNoticeInterface|any): Observable<boolean> {
    const endpoint = '/notice/notice/';
    const formData: FormData = new FormData();
    formData.append('file', data.file, data.file.name);
    formData.append('remark', data.remark);
    formData.append('description', data.description);
    return this.httpService
      .post(endpoint, formData);
  }

  UploadNotice(formData: uploadnotice): Observable<any> {
    return this.httpService.post('/notice/notice/', formData);
  }
// for fetch notes
  listNotice(): Observable<any> {
    return this.httpService.get('/notice/notice/');
  }
}
