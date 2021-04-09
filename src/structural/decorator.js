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
  /**
   * constructor
   */
  constructor() {
    this._description = "Unknown Hamburger";
    this._price = 0;
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
}

/**
 * CheeseBurger Class
 */
// @ts-ignore
class CheeseBurger extends Hamburger {
  /**
   * constructor
   */
  constructor(){
    super();
    this.description = 'Cheeseburger';
    this.price = 100;
  }
}


/**
 * BaconDoubleBurger Class
 */
// @ts-ignore
class BaconDoubleBurger extends Hamburger {
   /**
   * constructor
   */
  constructor() {
    super();
    this.description = "Bacon Double Burger";
    this.price = 110;
  }
}

/**
 * WesternBurger Class
 */
// @ts-ignore
class WesternBurger extends Hamburger {
   /**
   * constructor
   */
  constructor(){
    super();
    this.description = 'Western Burger';
    this.price = 105;
  }
}

/**
 * HamburgerDecorator Class
 */
class HamburgerDecorator extends Hamburger {
   /**
   * constructor
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super();
    this.burger = burger;
  }
}

class BaconDecorator extends HamburgerDecorator {
   /**
   * constructor
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super(burger);
  }

  /**
   * Description getter
   */
  get description() {
    return this.burger.description + " with bacon";
  }

  /**
   * Price getter
   */
  get price() {
    return this.burger.price + 9;
  }
}

class HamDecorator extends HamburgerDecorator {
  /**
   * constructor
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super(burger);
  }

  /**
   * Description getter
   */
  get description() {
    return this.burger.description + " with ham";
  }

  /**
   * Price getter
   */
  get price() {
    return this.burger.price + 15;
  }
}

class MeatDecorator extends HamburgerDecorator {
   /**
   * constructor
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super(burger);
  }

  /**
   * Description getter
   */
  get description() {
    return this.burger.description + " with meat";
  }

  /**
   * Price getter
   */
  get price() {
    return this.burger.price + 20;
  }
}


class PickleDecorator extends HamburgerDecorator {
   /**
   * constructor
   * @param {Hamburger} burger
   */
  constructor(burger) {
    super(burger);
  }

  /**
   * Description getter
   */
  get description() {
    return this.burger.description + " with pickle";
  }

  /**
   * Price getter
   */
  get price() {
    return this.burger.price + 5;
  }
}



let cheeseBurger = new CheeseBurger();
let cheeseBurgerWithHam = new HamDecorator(cheeseBurger);
let cheeseBurgerWithHamAndBacon = new BaconDecorator(cheeseBurgerWithHam);

console.log(cheeseBurger.getHamburger());
//output You order is: Cheeseburger and the price 100
console.log(cheeseBurgerWithHam.getHamburger());
//output You order is: Cheeseburger with ham and the price 115
console.log(cheeseBurgerWithHamAndBacon.getHamburger());
//output You order is: Cheeseburger with ham with bacon and the price 124