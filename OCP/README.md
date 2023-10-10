# OPEN/CLOSE PRINCIPLE (Principio de Abierto/Cerrado)

Los objetos o entidades deben estar abiertos para la extensión, pero cerrados para la modificación.


> Intentar llevar a cabo este principio al 100% es básicamente imposible, ya que es muy complicado prever todos los posibles casos que pueda tener, por lo que es aconsejable solo aplicarlas cuando realmente sea necesario, ya que muchas veces puede llegar a complicar el código, tan así, que se puede volver muy difícil de mantener.

# Ejercicio:

* Aplicar el principio de abierto/cerrado en el siguiente ejemplo de código:

```ts
class Producto {
    constructor(
        private nombre: string,
        private precio: number
    ) {}

    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    aplicarDescuento(descuento: number): number {
        return this.precio - descuento;
    }
}
```

* Su tarea radica en lograr que el siguiente código este abierto para la extensión, pero cerrado para la modificación. En otras palabras, que se pueda agregar un nuevo tipo de descuento sin tener que modificar la clase `Producto`.
