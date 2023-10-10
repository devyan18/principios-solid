# Ejercicio de Principios SOLID

- [principios solid]:(https://duncan-mcardle.medium.com/solid-principle-5-dependency-inversion-javascript-7b054685f7cb)

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

const tienda = new Tienda();

const producto1 = new Producto('Teléfono móvil', 500);
const producto2 = new Producto('Computadora portátil', 1000);

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);

console.log('Listado de productos:');
tienda.listarProductos();

console.log('Total a pagar:', tienda.calcularTotal());

console.log('Aplicando descuento del 10%:');
tienda.aplicarDescuento(0.1);

```