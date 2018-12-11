import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, publish, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html'
})
export class HotObservableComponent implements OnInit {

  source: Observable<number>;

  constructor() { }

  ngOnInit() {
    // hot observable - объект, который для всех подписчика использует один поток событий
    // hot observable можно сравнить с прямой трансляцией на Youtube - каждый пользователь просматривает видео с того момента как подключился к трансляции
    this.source = interval(500).pipe(take(10))
      .pipe(publish())    // сделать поток событий общим для всех
      .pipe(refCount());  // начать выдавать события при появлении первого подписчика
  }

  subscribe1() {
    this.source.subscribe((value) => {
      console.log("Subscriber 1 received a value " + value);
    })
  }

  subscribe2() {
    this.source.subscribe((value) => {
      console.log("       Subscriber 2 received a value " + value);
    })
  }
}
