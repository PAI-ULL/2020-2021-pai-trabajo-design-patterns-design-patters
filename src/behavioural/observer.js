// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Observer design pattern
 * @since 1/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Subject class
 */
class Subject {
  /**
   * Constructor
   */
  constructor() {
    /** @const {array} @private */
    this.observers_ = [];
  }
  /**
   * Add an observer
   * @param {Observer} observer The observer
   */
  addObserver(observer) {
    this.observers_.push(observer);
  }
  /**
   * Notify the all the observers
   */
  notify() {
    this.observers_.map((observer) => {
      observer.notify();
    });
  }
}

/**
 * Observer class
 */
class Observer {
  /**
   * Constructor
   * @param {function} action The action to perform when notified
   */
  constructor(action) {
    /** @const {function} @private */
    this.action_ = action;
  }
  /**
   * Notify the observer and perform its action
   */
  notify() {
    this.action_();
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
