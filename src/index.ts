// src/index.ts

/**
 * Adds two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The sum of a and b.
 */
export function add(a: number, b: number): number {
    return a + b;
  }
  
  /**
   * Subtracts the second number from the first.
   * @param a - First number.
   * @param b - Second number.
   * @returns The result of a - b.
   */
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  
  /**
   * Multiplies two numbers.
   * @param a - First number.
   * @param b - Second number.
   * @returns The product of a and b.
   */
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  /**
   * Divides the first number by the second.
   * @param a - Numerator.
   * @param b - Denominator.
   * @returns The result of a / b.
   * @throws Error if b is zero.
   */
  export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  