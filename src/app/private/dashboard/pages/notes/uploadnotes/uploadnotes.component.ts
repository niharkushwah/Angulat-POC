import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotesService} from "../notes.services";
import {SessionService} from "../../../../../services/session.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

interface uploadnotes {
  remark: string,
  description: string,
  subject: string,
  subject_code: string,
  uploadNotes: File,
}

export {
  uploadnotes
}

@Component({
  selector: 'app-uploadnotes',
  templateUrl: './uploadnotes.component.html',
  styleUrls: ['./uploadnotes.component.css']
})
export class UploadnotesComponent implements OnInit {
  user: any = [];
  isFaculty = false;
  fileToUpload: File | null = null;

  uploadNotesForm: FormGroup = this.formBuilder.group({
    'remark': ['', [Validators.required]],
    'description': ['', [Validators.required, Validators.minLength(8)]],
    'file': ['', [Validators.required]],
    'subject': ['', [Validators.required]],
    'subject_code': ['', [Validators.required]],
    'sem': ['', [Validators.required]],
    'year': ['', [Validators.required]],

  })

  constructor(private formBuilder: FormBuilder,
              private notesService: NotesService,
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
    this.uploadNotesForm.value.file = this.fileToUpload;
    this.notesService.postFile(this.uploadNotesForm.value).subscribe(data => {
      // do something, if upload success
    }, (error:HttpErrorResponse) => {
      console.log(error);
    });

    // console.log(this.uploadNotesForm.value)
    // this.notesService.uploadnotes(this.uploadNotesForm.value).subscribe(response => {
    //   console.log(response)
    // })
  }
  //
  // selectedFile: File | any;
  // onselectFile(event: any){
  //   this.selectedFile = event.target.files[0];
  //   }
  //   onUpload(){
  //   const fd = new FormData();
  //   fd.append('file', this.selectedFile, this.selectedFile.name)
  //     this.http.post('http://127.0.0.1:8000/api/notes/notes/' , fd).subscribe(res => {
  //       console.log(res);
  //     })
  //   }
}
