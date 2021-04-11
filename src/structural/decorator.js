// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Decorator design pattern
 * @since 5/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Base class
 */
// @ts-ignore
class Hamburger {
  /** @protected {string}*/
  _description = '';
  /** @protected {number} */
  _price = 0;
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
}

/**
 * CheeseBurger Class
 */
// @ts-ignore
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
  }
}


/**
 * BaconDoubleBurger Class
 */
// @ts-ignore
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
  }
}

/**
 * WesternBurger Class
 */
// @ts-ignore
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
  }
}

/**
 * HamburgerDecorator Class
 */
class HamburgerDecorator extends Hamburger {
  /**
   * Create an object HamburgerDecorator
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super();
    /**@protected {Hamburger} */
    this._burger = burger;
  }
}

/**
 * BaconDecorator Class
 */
class BaconDecorator extends HamburgerDecorator {
  /**
   * Create an object BaconDecorator
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super(burger);
  }

  /**
   * Description getter
   * @return {string}
   */
  getDescription() {
    return this._burger.getDescription() + ' with bacon';
  }

  /**
   * Price getter
   * @return {number} 
   */
  getPrice() {
    return this._burger.getPrice() + 9;
  }
}

/**
 * HamburgerDecorator Class
 */
class HamDecorator extends HamburgerDecorator {
  /**
   * Create an object HamDecorator
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super(burger);
  }

  /**
   * Description getter
   * @return {string}
   */
  getDescription() {
    return this._burger.getDescription() + ' with ham';
  }

  /**
   * Price getter
   * @return {number} 
   */
  getPrice() {
    return this._burger.getPrice() + 15;
  }
}

/**
 * Entry point for the program
 */
const exampleDecorator = function() {
  let cheeseBurger = new CheeseBurger();
  let cheeseBurgerWithHam = new HamDecorator(cheeseBurger);
  let cheeseBurgerWithHamAndBacon = new BaconDecorator(cheeseBurgerWithHam);

  console.log(cheeseBurger.getHamburger());
  //output You order is: Cheeseburger and the price 100
  console.log(cheeseBurgerWithHam.getHamburger());
  //output You order is: Cheeseburger with ham and the price 115
  console.log(cheeseBurgerWithHamAndBacon.getHamburger());
  //output You order is: Cheeseburger with ham with bacon and the price 124
};

exampleDecorator();