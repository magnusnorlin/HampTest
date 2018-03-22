import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {

  constructor(private http: HttpClient) {

  }

  getAllTexts() {
    console.log("getAllTexts() körs");
    return this.http.get('http://localhost:3000/');
  }


  postText(postText) {
    console.log("postText() körs");
    this.http.post(
      'http://localhost:3000/',
      {
        text: postText
      }

    ).subscribe(res => {
      console.log("postText res ", res)
    });
  }

}
