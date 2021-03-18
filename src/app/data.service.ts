import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let products =  [
      { id:   1,  name:   'Chocolate'},
      { id:   2,  name:   'Jam'},
      { id:   3,  name:   'Pie'},
      { id:   4,  name:   'Lemonade'},
      { id:   5,  name:   'Sunny days'},
    ];
    return { products };
  }
}
