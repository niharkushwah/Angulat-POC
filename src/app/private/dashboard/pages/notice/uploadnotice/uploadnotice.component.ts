import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../../../../services/session.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {NoticeService} from "../notice.services";


interface uploadnotice {
  remark: string,
  description: string,
  uploadNotice: File,
}

export {
  uploadnotice
}

@Component({
  selector: 'app-uploadnotice',
  templateUrl: './uploadnotice.component.html',
  styleUrls: ['./uploadnotice.component.css']
})
export class UploadnoticeComponent implements OnInit {

  user: any = [];
  isFaculty = false;
  fileToUpload: File | null = null;

  uploadNoticeForm: FormGroup = this.formBuilder.group({
    'remark': ['', [Validators.required]],
    'description': ['', [Validators.required, Validators.minLength(8)]],
    'file': ['', [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder,
              private noticeService: NoticeService,
              private sessionService: SessionService,
              private http: HttpClient,
  ) {
    this.setUserRole();
  }

  ngOnInit(): void {
  }

  setUserRole(){
    this.user = this.sessionService.getUser();
    this.isFaculty = this.user.role == 0;
  }

  handleFileInput(event: any) {
    let files:FileList = event.target.files;
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }
  onSubmit(): void {
    this.uploadNoticeForm.value.file = this.fileToUpload;
    this.noticeService.postFile(this.uploadNoticeForm.value).subscribe(data => {
      window.alert("Notes Uploaded Successfully !");
      // to reset the form after uploading
      this.uploadNoticeForm.reset();
    }, (error:HttpErrorResponse) => {
      console.log(error);
    });

  }

}
