// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Observer design pattern
 *     This pattern is composed of a subect class and a series of
 *     observer. Each receiver is waiting for the subect to detect
 *     or fire an event and, whenever that happens, it will perform
 *     an action, that could be a side effect or an update to the
 *     instance. This allows to represent this type of one to
 *     many dependencies without tight coupling
 * @since 1/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Subject class
 */
class Subject {
  /** @const {array} @private */
  #observers;
  /**
   * Constructor
   */
  constructor() {
    this.#observers = [];
  }
  /**
   * Add an observer
   * @param {Observer} observer The observer
   */
  addObserver(observer) {
    this.#observers.push(observer);
  }
  /**
   * Notify the all the observers
   */
  notify() {
    this.#observers.map((observer) => {
      observer.notify();
    });
  }
}

/**
 * Observer class
 */
class Observer {
  /** @const {function} @private */
  #action;
  /**
   * Constructor
   * @param {function} action The action to perform when notified
   */
  constructor(action) {
    this.#action = action;
  }
  /**
   * Notify the observer and perform its action
   */
  notify() {
    this.#action();
  }
}


/**
 * Entry point for the program
 */
const exampleObserver = () => {
  const subject = new Subject();
  subject.addObserver(new Observer(() => {
    console.log('Hello from observer1');
  }));
  subject.addObserver(new Observer(() => {
    console.log('Hello from observer2');
  }));
  subject.notify();
};

exampleObserver();
