import { Injectable } from '@angular/core';
import { CoffeeMaker } from './coffee-maker';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private coffeeMakerArr: CoffeeMaker[] = [
    new CoffeeMaker("Keurig", true), 
    new CoffeeMaker("Mr Coffee", false),
    new CoffeeMaker("Nespresso", true)
  ];
  constructor() { }

  getCoffeeMakers(): CoffeeMaker[] {
    return this.coffeeMakerArr;
  }
}
