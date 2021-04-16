// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Iterator design pattern.
 *    The iterator patterns allows us to iterate over the elements of a 
 *    container independent of the container's type.
 * @since 1/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Container class
 */
class Container {
  /** @const {Array} @private */
  #members;
  /**
   * Constructor
   * @param {...*} members Something to be stored
   */
  constructor(...members) {
    this.#members = members;
  }
  /**
   * Iterator implementation
   */
  *[Symbol.iterator]() {
    for (const element of this.#members) {
      yield element;
    }
  }
}

/**
 * Container class
 */
class AnotherContainer {
  /** @const {Array} @private */
  #members;
  /**
   * Constructor
   * @param {...*} members Something to be stored
   */
  constructor(...members) {
    this.#members = '';
    for (const element of members) {
      this.#members += JSON.stringify(element) + ',';
    }
    this.#members = this.#members.slice(0, -1);
  }
  /**
   * Iterator implementation
   */
  *[Symbol.iterator]() {
    for (const element of this.#members.split(',')) {
      yield JSON.parse(element);
    }
  }
}

/**
 * Entry point for the program
 */
const exampleIterator = () => {
  const container = new Container(1, 2, 3, 4, 5);
  console.log('Array container: ');
  for (const element of container) {
    console.log(element);
  }
  const container2 = new AnotherContainer(1, 2, 3, 4, 5);
  console.log('String container: ');
  for (const element of container2) {
    console.log(element);
  }
};

exampleIterator();
