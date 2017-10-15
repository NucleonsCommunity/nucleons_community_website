import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
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
