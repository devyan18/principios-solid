// Ejemplo sin Liskov Substitution Principle

class Rectangulo {
    protected ancho: number;
    protected alto: number;
  
    constructor(ancho: number, alto: number) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    setAncho(ancho: number) {
      this.ancho = ancho;
    }
  
    setAlto(alto: number) {
      this.alto = alto;
    }
  
    getArea(): number {
      return this.ancho * this.alto;
    }
  }
  
  class Cuadrado extends Rectangulo {
    constructor(lado: number) {
      super(lado, lado);
    }
  
    setAncho(ancho: number) {
      this.ancho = this.alto = ancho;
    }
  
    setAlto(alto: number) {
      this.ancho = this.alto = alto;
    }
  }
  
  function calcularArea(rectangulo: Rectangulo) {
    rectangulo.setAncho(5);
    rectangulo.setAlto(10);
    return rectangulo.getArea();
  }
  
  const rectangulo = new Rectangulo(5, 10);
  const cuadrado = new Cuadrado(5);
  
  console.log('Área del rectángulo:', calcularArea(rectangulo));  // Salida: Área del rectángulo: 50
  console.log('Área del cuadrado:', calcularArea(cuadrado));  // Salida: Área del cuadrado: 50 (incorrecto, se esperaba 25)
  
  // Ejemplo con Liskov Substitution Principle
  