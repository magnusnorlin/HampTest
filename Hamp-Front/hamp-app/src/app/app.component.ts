import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  httpIncomimg: Array<Object> = [];

  constructor(private appService: AppService, private http: HttpClient) {
    appService.getAllTexts().subscribe( text => {
      text.forEach(element => {
        this.httpIncomimg.push(element);
        console.log(" Hur många logopar");
      });
      
    });
    console.log('httpIncomimg: ', this.httpIncomimg)
  }

  onEmitt(event:{text: string}) {
    console.log('onEmitt', event);
    this.httpIncomimg.push(event);
    console.log('httpIncomimg: ', this.httpIncomimg);
  }


}
