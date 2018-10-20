import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.returnObservable().subscribe(
      number => console.log('Listen: ', number),
      error => console.log('Error en el observable: ', error),
      () => console.log('Observable completo')
    );
  }

  ngOnInit() {
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let count = 0;

      const INTERVAL = setInterval( () => {
        count += 1;

        const COUNT = {
          value: count
        };

        observer.next(COUNT);

        if (count === 4) {
          observer.complete();
          clearInterval(INTERVAL);
        }

        // if (count === 3) {
        //   // clearInterval(INTERVAL);
        //   observer.error(count);
        // }
      }, 1000);
    }).pipe(
      retry(2),
      map( resp => resp.value ),
      filter( value => {
        // Filtrar numeros pares e impares
        if ( (value % 2) === 1 ) {
          // impares
          return true;
        } else {
          // pares
          return false;
        }
      })
    );
  }

}
