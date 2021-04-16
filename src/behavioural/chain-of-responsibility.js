// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Chain of responsibility design pattern
 *     This pattern is composed of a sender class and a series of 
 *     receivers. Each receiver is waiting for the Sender to send 
 *     a request, but only one of them will handle a concrete 
 *     request type. This allows to represent this type of one to 
 *     many dependencies without tight coupling
 * @since 1/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

const REQUEST_TYPE = {
  LOG: 'LOG',
  REVERSE_LOG: 'REVERSE_LOG',
};

/**
 * Sender class
 */
class Sender {
  /** @const {array} @private */
  #receivers;
  /**
   * Constructor
   */
  constructor() {
    this.#receivers = [];
  }
  /**
   * Add a receiver
   * @param {Receiver} receiver The receiver
   */
  addReceiver(receiver) {
    this.#receivers.push(receiver);
  }
  /**
   * Send the request to the receivers
    * @param {string} requestType The type of the request
    * @param {string} requestData The data of the request
   */
  sendRequest(requestType, requestData) {
    for (const receiver of this.#receivers) {
      if (receiver.canHandle(requestType)) {
        receiver.handleRequest(requestData);
        return;
      }
    }
    throw new Error('Invalid request');
  }
}

/**
 * Receiver interface
 */
class Receiver {
  /**
   * A method to check if a receiver can handle an specific type of request
   * @param {string} requestType The type of the request
   * @return {boolean} Wheter the receiver can handle the request or not
   */
  canHandle(requestType) {
    return false;
  }
  /**
   * A method to handle a request
   * @param {string} requestData The data of the request
   */
  handleRequest(requestData) {
  }
}

/**
 * Logger class
 */
class Logger extends Receiver {
  /**
   * A method to check if a receiver can handle an specific type of request
   * @param {string} requestType The type of the request
   * @return {boolean} Wheter the receiver can handle the request or not
   * @override
   */
  canHandle(requestType) {
    if (requestType === REQUEST_TYPE.LOG) {
      return true;
    }
    return false;
  }
  /**
   * Handles a request logging the request data
   * @param {string} requestData The data of the request
   * @override
   */
  handleRequest(requestData) {
    console.log(requestData);
  }
}

/**
 * ReverseLogger class
 */
class ReverseLogger extends Receiver {
  /**
   * A method to check if a receiver can handle an specific type of request
   * @param {string} requestType The type of the request
   * @return {boolean} Wheter the receiver can handle the request or not
   * @override
   */
  canHandle(requestType) {
    if (requestType === REQUEST_TYPE.REVERSE_LOG) {
      return true;
    }
    return false;
  }
  /**
   * Handles a request logging the request data but reversed
   * @param {string} requestData The data of the request
   * @override
   */
  handleRequest(requestData) {
    console.log(requestData.split('').reverse().join(''));
  }
}


/**
 * Entry point for the program
 */
const exampleChainOfResponsibility = () => {
  const sender = new Sender();
  sender.addReceiver(new Logger());
  sender.addReceiver(new ReverseLogger());
  sender.sendRequest(REQUEST_TYPE.LOG, 'First request');
  sender.sendRequest(REQUEST_TYPE.REVERSE_LOG, 'Second request');
  sender.sendRequest(REQUEST_TYPE.REVERSE_LOG, 'Third request');
  sender.sendRequest(REQUEST_TYPE.LOG, 'Fourth request');
};

exampleChainOfResponsibility();
