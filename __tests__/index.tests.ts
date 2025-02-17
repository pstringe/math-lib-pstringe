// __tests__/index.test.ts

import { add, subtract, multiply, divide, Variable, Monomial, Polynomial } from "../src/index";

describe("Math Library", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("Monomial Methods", () => {
    const x = new Variable("x");

    test("simplify monomials", () => {
        const m1 = new Monomial(1, [x], 1);
        const m2 = new Monomial(1, [x], 1);
        const simplified = m1.simplify(m2);
        expect(simplified[0].variables[0]).toEqual(x);
        expect(simplified[0].coefficient).toEqual(2);
    });   
});

