import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../../../../services/session.service";
import {TimeTableService} from "../gettimetable.service";

interface uploadtimetable {
  remark: string,
  description: string,
  subject: string,
  subject_code: string,
  uploadNotes: File,
}

export {
  uploadtimetable
}

@Component({
  selector: 'app-uploadtimetable',
  templateUrl: './uploadtimetable.component.html',
  styleUrls: ['./uploadtimetable.component.css']
})
export class UploadtimetableComponent implements OnInit {

  user: any = [];
  isFaculty = false;
  fileToUpload: File | null = null;

  uploadTimetableForm: FormGroup = this.formBuilder.group({
    'tittle': ['', [Validators.required]],
    'description': ['', [Validators.required, Validators.minLength(8)]],
    'file': ['', [Validators.required]],
    'year': ['', [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder,
              private timetableService: TimeTableService,
              private sessionService: SessionService,
              private http: HttpClient,
  ) {
    this.setUserRole();
  }

  ngOnInit(): void {
  }

  setUserRole() {
    this.user = this.sessionService.getUser();
    this.isFaculty = this.user.role == 0;
  }

  handleFileInput(event: any) {
    let files: FileList = event.target.files;
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  onSubmit(): void {
    this.uploadTimetableForm.value.file = this.fileToUpload;
    this.timetableService.postFile(this.uploadTimetableForm.value).subscribe(data => {
      window.alert("Notes Uploaded Successfully !");
      // to reset the form after uploading
      this.uploadTimetableForm.reset();
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}
