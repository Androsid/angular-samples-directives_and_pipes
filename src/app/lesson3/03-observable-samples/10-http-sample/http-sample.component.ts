import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { flatMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-http-sample',
  templateUrl: './http-sample.component.html',
  styleUrls: ["./http-sample.component.css"]
})
export class HttpSampleComponent {

  posts: string[] = [];

  constructor(private http: Http) { }

  download() {
    this.posts = [];
    
    this.http.get("http://jsonplaceholder.typicode.com/posts/")
      .pipe(flatMap((response) => response.json()))
      .pipe(filter<any>((post) => post.userId == 5))
      .pipe(map((post) => post.body))
      .subscribe((post) => { this.posts.push(post); });
  }
}
