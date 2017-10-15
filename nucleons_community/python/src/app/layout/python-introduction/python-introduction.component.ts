import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-python-introduction',
  templateUrl: './python-introduction.component.html',
  styleUrls: ['./python-introduction.component.scss']
})
export class PythonIntroductionComponent implements OnInit {
  name:string;
  url:any;
  video: any = {id: 'yv5CZYfsmvs'};
  baseUrl:string = "https://www.youtube.com/embed/";
  constructor(private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  }

  ngOnInit() {
  }

}
