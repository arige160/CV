import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{
  shortLink: string ="";
  Loading: boolean = false;
  file!: File ;

  constructor(private fileService: FileUploadService) {}

  ngOnInit(): void {
      
  }
  onChange(event: any){
    this.file= event.target.files[0]
  }
  onUpload(){
    this.Loading= !this.Loading;
    console.log(this.file);
    this.fileService.upload(this.file).subscribe((event: any)=>{
      if (typeof(event)=='object'){
        this.shortLink= event.link;
        this.Loading= false;
      }
    })
  }

}
