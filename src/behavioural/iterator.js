/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Iterator design pattern
 * @since 1/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Container class
 */
class Container {
  /**
   * Constructor
   * @param {...member} member Something to be stored
   */
  constructor(...members) {
    this.members_ = [];
    for (const element of members) {
      this.members_.push(element);
    }
  }
  /**
   * Iterator implementation
   */
  * [Symbol.iterator]() {
    for (const element of this.members_) {
      yield element;
    }
  }
}

/**
 * Container class
 */
class AnotherContainer {
  /**
   * Constructor
   * @param {...member} member Something to be stored
   */
  constructor(...members) {
    this.members_ = '';
    for (const element of members) {
      this.members_ += JSON.stringify(element) + ',';
    }
    this.members_ = this.members_.slice(0, -1);
  }
  /**
   * Iterator implementation
   */
  * [Symbol.iterator]() {
    for (const element of this.members_.split(',')) {
      yield JSON.parse(element);
    }
  }
}

/**
 * Entry point for the program
 */
const main = () => {
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

main();
