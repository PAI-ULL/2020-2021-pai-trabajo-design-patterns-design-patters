// @ts-nocheck
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of bad desing.
 * @since 5/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

 'use strict';

 /**
  * Base class
  */
 class Hamburger {
   /**
    * constructor
    */
   constructor() {
     this._description = "Unknown Hamburger";
     this._price = 0;
     //Add Atribute for each new extra ingredient
   }
   /**
    * Price setter
    */
   set price(price) {
     this._price = price;
   }
 
   /**
    * Price getter
    */
   get price() {
     return this._price;
   }
 
   /**
    * Description getter
    */
   get description() {
     return this._description;
   }
 
   /**
    * @function getHambuger
    * Get a descrption of the hamburger with its price.
    * @return {string}
    */
   getHamburger() {
     return `You order is: ${this.description} and the price ${this.price}`;
   }

   /**
    * Add more methods if you want to add a new functionality for example new 
    * extra igredient
    */
 }
 
 /**
  * CheeseBurger Class
  */
 class CheeseBurger extends Hamburger {
   /**
    * constructor
    */
   constructor(){
     super();
     this.description = 'Cheeseburger';
     this.price = 100;
     //Add Atribute for each new extra ingredient
   }
 }
 
 
 /**
  * BaconDoubleBurger Class
  */
 class BaconDoubleBurger extends Hamburger {
    /**
    * constructor
    */
   constructor() {
     super();
     this.description = "Bacon Double Burger";
     this.price = 110;
     //Add Atribute for each new extra ingredient
   }
 }
 
 /**
  * WesternBurger Class
  */
 class WesternBurger extends Hamburger {
    /**
    * constructor
    */
   constructor(){
     super();
     this.description = 'Western Burger';
     this.price = 105;
     //Add Atribute for each new extra ingredient
   }
 }

 /*class AnotherBurgerWithExtra extends Hamburger {
 constructor(){
   super();
   this.description = 'Another Burger';
   this.price = newPrice;
   //Add Atribute for each new extra ingredient
 }
}*/
 