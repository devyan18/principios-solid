class Forma {
  getArea(): number {
    throw new Error('Este método debe ser sobreescrito por las subclases');
  }
}
  
class Rectangulo extends Forma {
  protected ancho: number;
  protected alto: number;

  constructor(ancho: number, alto: number) {
    super();
    this.ancho = ancho;
    this.alto = alto;
  }

  getArea(): number {
    return this.ancho * this.alto;
  }
}

class Cuadrado extends Forma {
  protected lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  getArea(): number {
    return this.lado ** 2;
  }
}

function calcularArea(forma: Forma) {
  return forma.getArea();
}

const rectangulo = new Rectangulo(5, 10);
const cuadrado = new Cuadrado(5);

console.log('Área del rectángulo:', calcularArea(rectangulo));  // Salida: Área del rectángulo: 50
console.log('Área del cuadrado:', calcularArea(cuadrado));  // Salida: Área del cuadrado: 25 (correcto)
