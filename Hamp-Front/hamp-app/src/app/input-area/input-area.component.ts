import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {
  firstName = '';

  @Output() serverCreated = new EventEmitter<{text: string}>();


  constructor(private appService: AppService) {
    
   }

  ngOnInit() {
  }

  onClickNames() {
    console.log(this.firstName);
    this.appService.getAllTexts().subscribe( test => { 
      console.log('onclick test text:', test)
    });

    this.appService.postText(this.firstName);
    this.serverCreated.emit({text: this.firstName});
 
  }

}
