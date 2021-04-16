// @ts-check
/**
 * PAI presentation
 * ULL 2020-2021
 * @file An example of the RAII design pattern
 *     This pattern is based on the use of constructors and 
  *     destructors and tries to ensure all resources are properly
  *     allocated and freed. It is of capital importance in some low
  *     level programming languages like C++.
 * @since 31/03/2021
 * @author Daniel del Castillo de la Rosa
 * @author Francisco Jesús Mendes Gómez
 */

'use strict';

/**
 * Class representing a resource(in the form of a file)
 *     made to illustrate the RAII design pattern
 */
class FileResource {
  /**
   * Opens the file, initializing the resource
   * @param {string} path The path to the file
   */
  constructor(path) {
    // open the file
    console.log(`Opening file ${path}`);
  }
  /**
   * Necessary action before the file goes out of scope
   */
  destructor() {
    // Maybe flush the output to the file or write an EOF
    console.log('Closing the file');
  }
  /**
   * A write method that can throw an exception
   * @param {string} string The string to write
   */
  write(string) {
    console.log(`Writing "${string}"`);
    throw new Error('Error while writing');
  }
}

/**
 * Entry point for the program
 */
const exampleRAII = () => {
  const resource = new FileResource('file1');
  try {
    resource.write('Thing to write');
  } catch (error) {
    console.log(error.message);
  } finally {
    resource.destructor();
  }
};

exampleRAII();
