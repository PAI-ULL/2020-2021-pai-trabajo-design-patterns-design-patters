/* eslint-disable no-unused-vars */
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Decorator design pattern .
 *    The decorator pattern allows us to add functionalities and behaviors to
 *    our classes in execution time without to create new subclasses.
 * @since 5/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Base class
// @ts-ignore */
class Hamburger {
  /** @const {string} @protected */
  description_ = '';
  /** @const {number} @protected */
  price_ = 0;
  /**
   * Create an object hamburger
   */
  constructor() {
    this.description = 'Unknown Hamburger';
    this.price = 0;
  }

  /**
   * Price getter
   * @return {number} The price
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
    return `You order is: ${this.getDescription()} ` +
        `and the price ${this.getPrice()}`;
  }
}

/**
 * CheeseBurger Class
 */
class CheeseBurger extends Hamburger {
  /**
   * Create an object Cheeseburger
   */
  constructor() {
    super();
    /** @const {string} @protected */
    this.description_ = 'Cheeseburger';
    /** @const {number} @protected */
    this.price_ = 100;
  }
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
  }
}

/**
 * WesternBurger Class
 */
class WesternBurger extends Hamburger {
  /**
   * Create an object WesternBurger
   */
  constructor() {
    super();
    /** @const {string} @protected */
    this.description_ = 'Western Burger';
    /** @const {number} @protected */
    this.price_ = 105;
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
    /** @protected {Hamburger} */
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
  const cheeseBurger = new CheeseBurger();
  const cheeseBurgerWithHam = new HamDecorator(cheeseBurger);
  const cheeseBurgerWithHamAndBacon = new BaconDecorator(cheeseBurgerWithHam);

  console.log(cheeseBurger.getHamburger());
  // output You order is: Cheeseburger and the price 100
  console.log(cheeseBurgerWithHam.getHamburger());
  // output You order is: Cheeseburger with ham and the price 115
  console.log(cheeseBurgerWithHamAndBacon.getHamburger());
  // output You order is: Cheeseburger with ham with bacon and the price 124
};

exampleDecorator();
