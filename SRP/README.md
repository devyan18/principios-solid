# SINGLE RESPONSIBILITY PRINCIPLE (Principio de responsabilidad única).

> Una clase o función solo debe tener una razón para cambiar.


O como dice la filosofía Unix “Haz una cosa, hazla bien”, se lee bastante sencillo ¿no?, la realidad, es que es bastante complicada de implementar.

* __Debemos tener un objetivo — Nuestra clase o función solo debe hacer exactamente una cosa.__


# Ejercicio: 

* Aplicar el principio de responsabilidad única en el siguiente ejemplo de código:

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

> Su tarea es lograr que la clase `Producto` solo tenga una razón para cambiar y eso lo lograremos separando la funcionalidad de descuento en una clase aparte.