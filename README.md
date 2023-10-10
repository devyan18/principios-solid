# Ejercicio de Principios SOLID

> Material teórico: [aquí.](https://duncan-mcardle.medium.com/solid-principle-5-dependency-inversion-javascript-7b054685f7cb)


Contexto:

> Supongamos que estás diseñando un sistema para una tienda en línea que vende productos electrónicos. Los productos electrónicos incluyen teléfonos móviles y computadoras portátiles. Cada producto tiene un precio y se pueden aplicar descuentos según ciertas reglas. Necesitas aplicar los principios SOLID en tu diseño para que sea mantenible y extensible en el futuro.


Ejercicio:


* Aplicar los distintos principios SOLID a la clase `Tienda` y a la clase `Producto` del código de ejemplo para que cumplan con los principios SOLID.


```ts
class Producto {
  constructor(private nombre: string, private precio: number) {}

  obtenerNombre(): string {
    return this.nombre;
  }

  obtenerPrecio(): number {
    return this.precio;
  }

  aplicarDescuento(descuento: number): number {
    return this.precio - descuento;
  }
}

class Tienda {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  listarProductos() {
    for (const producto of this.productos) {
      console.log(`Producto: ${producto.obtenerNombre()}, Precio: $${producto.obtenerPrecio()}`);
    }
  }

  calcularTotal(): number {
    let total = 0;
    for (const producto of this.productos) {
      total += producto.obtenerPrecio();
    }
    return total;
  }

  aplicarDescuento(descuento: number) {
    for (const producto of this.productos) {
      const precioConDescuento = producto.aplicarDescuento(descuento);
      console.log(`Producto: ${producto.obtenerNombre()}, Precio con descuento: $${precioConDescuento}`);
    }
  }
}
```