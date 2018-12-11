import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, interval } from 'rxjs';
import { scan, buffer, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-throtteled-buffering',
  templateUrl: './throtteled-buffering.component.html'
})
export class ThrotteledBufferingComponent implements AfterViewInit {

  @ViewChild("generateButton")
  generateButon: ElementRef;
  stream: Observable<any>;
  result: string = "";

  constructor() { }

  ngAfterViewInit() {
    this.stream = fromEvent(this.generateButon.nativeElement, "click");

    this.stream.pipe(scan(x => x + 1, 0))
    // scan выполняет функцию для каждого значения в потоке
    // stream.debounce(() => Observable.interval(1000)) - stream производит событие только если событие выдал Observable переданый в параметре.
    // buffer(Observable) - собирает значения до тех пор пока observable не выдаст событие
    .pipe(buffer(this.stream.pipe(debounce(() => interval(1000)))))
    .forEach(x => this.send(x));
  }

  send(data) {
    this.result += JSON.stringify(data);
  }

}
