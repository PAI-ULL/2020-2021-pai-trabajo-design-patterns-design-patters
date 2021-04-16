// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the singleton design pattern. 
 *    The singleton pattern is is useful when we need to
 *    ensure that only one instance of a class is created
 * @since 16/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Example of the singleton pattern
 */
class Singleton {
  /** @const {*} @private */
  static instance_;
  /**
   * Singleton "constructor"
   */
  static getInstance() {
    if (this.instance_ === undefined) {
      this.instance_ = {};
    }
    return this.instance_;
  }
}


/**
 * Entry point for the program
 */
const exampleSingleton = () => {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();
  console.log(singleton1 === singleton2);
};

exampleSingleton();
