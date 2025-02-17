"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
/**
 * Adds two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The sum of a and b.
 */
function add(a, b) {
    return a + b;
}
/**
 * Subtracts the second number from the first.
 * @param a - First number.
 * @param b - Second number.
 * @returns The result of a - b.
 */
function subtract(a, b) {
    return a - b;
}
/**
 * Multiplies two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The product of a and b.
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Divides the first number by the second.
 * @param a - Numerator.
 * @param b - Denominator.
 * @returns The result of a / b.
 * @throws Error if b is zero.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
