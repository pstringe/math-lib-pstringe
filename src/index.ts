// src/index.ts
export class Variable {
    symbol: string;
    index: Variable;
    
    constructor(symbol: string) {
        this.symbol = symbol;
        this.index = this;
    }
}

export class Monomial {
    coefficient: number;
    variables: Variable[];
    exponent: number;

    constructor(coefficient: number, variables: Variable[], exponent: number) {
        this.coefficient = coefficient;
        this.variables = variables;
        this.exponent = exponent;
    }
    
    isSimilarTo(monomial: Monomial): boolean {
        if (this.variables.length !== monomial.variables.length) {
            return false;
        }
        for (let i = 0; i < this.variables.length; i++) {
            if (this.variables[i].symbol !== monomial.variables[i].symbol || this.variables[i].index !== monomial.variables[i].index) {
                return false;
            }
        }
        return true;
    }

    add(monomial: Monomial): Monomial {
        if (!this.isSimilarTo(monomial)) {
            throw new Error("Monomials are not similar.");
        }
        return new Monomial(this.coefficient + monomial.coefficient, this.variables, this.exponent);
    }

    subtract(monomial: Monomial): Monomial {
        if (!this.isSimilarTo(monomial)) {
            throw new Error("Monomials are not similar.");
        }
        return new Monomial(this.coefficient - monomial.coefficient, this.variables, this.exponent);

    }

    simplify(monomial: Monomial): Monomial[]{
        if (!this.isSimilarTo(monomial)) {
            return [this, monomial];
        }
        return [this.add(monomial)];
    }
}

export class Polynomial {
    protected monomials: Monomial[];

    constructor(monomials: Monomial[]) {
        this.monomials = monomials;
    }

    simplify(polynomial: Polynomial): Polynomial {
        let result: Monomial[] = [];
        for (let i = 0; i < this.monomials.length; i++) {
            for (let j = 0; j < polynomial.monomials.length; j++) {
                let simplified = this.monomials[i].simplify(polynomial.monomials[j]);
                result = result.concat(simplified);
            }
        }
        return new Polynomial(result);
    }
}

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
  