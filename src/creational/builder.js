// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the Builder design pattern. 
 *    The builder pattern is based on separating the construction code and 
 *    logic of a complex object from its representation. 
 * @since 1/04/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Complex class
 */
class DataFrame {
  /** @const {*} @private */
  #data;
  /**
   * Simple constructor
   * @param {array} data The data
   */
  constructor(data) {
    this.#data = data;
  }
}

/**
 * Builder interface
 */
class DataFrameBuilder {
  /**
   * Constructor
   */
  constructor() { }
  /**
   * Build a dataFrame
   * @return {DataFrame} A data frame
   */
  build() {
    return undefined;
  }
}

/**
 * Builder instace
 */
class DataFrameCSVBuilder extends DataFrameBuilder {
  /**
   * Constructor
   * @param {string} path The path to the csv file
   */
  constructor(path) {
    super();
    // initialize the builder
    console.log('Initialize the builder');
  }
  /**
   * Build a dataFrame
   * @return {DataFrame} A data frame
   * @override
   */
  build() {
    console.log('Create the object');
    return new DataFrame([1, 2]);
  }
}

/**
 * Entry point for the program
 */
const exampleBuilder = () => {
  const resource = new DataFrameCSVBuilder('file1.csv');
  const dataFrame = resource.build();
  console.log(dataFrame);
};

exampleBuilder();
