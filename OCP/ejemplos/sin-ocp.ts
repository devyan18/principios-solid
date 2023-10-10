class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(10, 5));  // Output: 15
console.log(calculadora.restar(10, 5));  // Output: 5
