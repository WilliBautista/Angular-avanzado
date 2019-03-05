import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: []
})
export class PromesaComponent implements OnInit {

  constructor() {
    // this.returnPromise()
    //   .then( success =>  console.log('¿Solucionada?', success))
    //   .catch( err => console.log('¿Solucionada?', err));
  }

  ngOnInit() {
  }

  returnPromise(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let count = 0;

      const INTERVAL = setInterval( () => {
        count += 1;
        console.log(count);

        if (count === 3) {
          // resolve(true);
          reject(false);
          clearInterval( INTERVAL );
        }

      }, 1000 );
    });
  }

}
