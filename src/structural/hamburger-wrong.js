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
  /** @protected {string}*/
  _description = '';
  /** @protected {number} */
  _price = 0;
  /**
   * Add an atribute for each extra ingredient.
   */
  
  /**
   * Create an object hamburger
   */
  constructor() {
    this._description = 'Unknown Hamburger';
    this._price = 0;
  }

  /**
   * Price getter
   * @return {number} 
   */
  getPrice() {
    return this._price;
  }

  /**
   * Description getter
   * @return {string}
   */
  getDescription() {
    return this._description;
  }

  /**
   * Get a description of the hamburger with its price.
   * @return {string}
   */
  getHamburger() {
    return `You order is: ${this.getDescription()} and the price ${this.getPrice()}`;
  }
   /**
    * Add more methods if you want to add a new functionality for example new 
    * extra ingredient
    */
}

/**
 * CheeseBurger Class
 */
class CheeseBurger extends Hamburger {
  /**
   * Create an object Cheeseburger
   */
  constructor(){
    super();
    /** @protected {string}*/
    this._description = 'Cheeseburger';
    /** @protected {number} */
    this._price = 100;
    /**
     * Add an atribute for each extra ingredient.
     */
  }
  /**
   * Add more methods if you want to add a new functionality for example new 
   * extra ingredient
   */
}


/**
 * BaconDoubleBurger Class
 */
class BaconDoubleBurger extends Hamburger {
 /**
  * Create an object BaconDoubleBurger
  */
  constructor() {
    super();
    /** @protected {string}*/
    this._description = 'Bacon Double Burger';
    /** @protected {number} */
    this._price = 110;
    /**
     * Add an atribute for each extra ingredient.
     */
  }
  /**
   * Add more methods if you want to add a new functionality for example new 
   * extra ingredient
   */
}

/**
 * WesternBurger Class
 */
class WesternBurger extends Hamburger {
 /**
  * Create an object WesternBurger
  */
  constructor(){
    super();
    /** @protected {string}*/
    this._description = 'Western Burger';
    /** @protected {number} */
    this._price = 105;
    /**
     * Add an atribute for each extra ingredient.
     */
  }
  /**
   * Add more methods if you want to add a new functionality for example new 
   * extra ingredient
   */
}


/* class AnotherBurgerWithExtra extends Hamburger {
 /**
  * Create an object WesternBurger
  *
  constructor(){
    super();
    /** @protected {string}*
    this.description = 'Another Burger';
    /** @protected {number} *
    this.price = newPrice;
    /**
     * Add an atribute for each extra ingredient.
     *
  }
  /**
   * Add more methods if you want to add a new functionality for example new 
   * extra ingredient
   *
}*/
 