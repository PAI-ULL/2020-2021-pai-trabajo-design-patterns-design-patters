// @ts-nocheck
/**
 * PAI presentation
 * ULL 2020-2021
 * @file This represents a case where decorator pattern could be usefull.
 * @since 5/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

 'use strict';

 /**
 * Base class
 */
class Hamburger {
  /** @const {string} @protected */
  description_ = '';
  /** @const {number} @protected */
  price_ = 0;
  /**
   * Add an atribute for each extra ingredient.
   */
  
  /**
   * Create an object hamburger
   */
  constructor() {
    this.description_ = 'Unknown Hamburger';
    this.price_ = 0;
  }

  /**
   * Price getter
   * @return {number} 
   */
  getPrice() {
    return this.price_;
  }

  /**
   * Description getter
   * @return {string}
   */
  getDescription() {
    return this.description_;
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
    /** @const {string} @protected */
    this.description_ = 'Cheeseburger';
    /** @const {number} @protected */
    this.price_ = 100;
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
    /** @const {string} @protected */
    this.description_ = 'Bacon Double Burger';
    /** @const {number} @protected */
    this.price_ = 110;
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
    /** @const {string} @protected */
    this.description_ = 'Western Burger';
    /** @const {number} @protected */
    this.price_ = 105;
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
 