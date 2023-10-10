// se crea una interfaz Operacion que tiene un método calcular
interface Operacion {
    calcular(a: number, b: number): number;
}

// se crean las clases Suma, Resta y Multiplicacion que implementan la interfaz Operacion
class Suma implements Operacion {
    calcular(a: number, b: number): number {
        return a + b;
    }
}

class Resta implements Operacion {
    calcular(a: number, b: number): number {
        return a - b;
    }
}

class Multiplicacion implements Operacion {
    calcular(a: number, b: number): number {
        return a * b;
    }
}

// se crea la clase Calculadora que recibe como parámetro una operación
class Calculadora {
    private operacion: Operacion;

    constructor(operacion: Operacion) {
        this.operacion = operacion;
    }

    realizarOperacion(a: number, b: number): number {
        return this.operacion.calcular(a, b);
    }
}

const sumaCalculadora = new Calculadora(new Suma());
console.log('Suma:', sumaCalculadora.realizarOperacion(10, 5));  // Salida: Suma: 15

const restaCalculadora = new Calculadora(new Resta());
console.log('Resta:', restaCalculadora.realizarOperacion(10, 5));  // Salida: Resta: 5

const multiplicacionCalculadora = new Calculadora(new Multiplicacion());
console.log('Multiplicación:', multiplicacionCalculadora.realizarOperacion(10, 5));  // Salida: Multiplicación: 50
