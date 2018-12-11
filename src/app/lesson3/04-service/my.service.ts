import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NextObserver } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Injectable()
export class MyService {

    private observable: Observable<number>;

    constructor() {
        this.observable = this.start();
    }

    private start(): Observable<number> {
        let stream = new Observable<number>(function (observer) {
            let value = 0;
            setInterval(() => {
                value++;
                observer.next(value);
            }, 1000);
        })
            .pipe(publish())
            .pipe(refCount()); // 1 вариант
        //stream.connect(); // 2 вариант
        return stream;
    }

    public subscribe(observer: (value: number) => void) {
        return this.observable.subscribe(observer);
    }

}
