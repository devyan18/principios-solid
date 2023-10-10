# INTERFACE SEGREGATION PRINCIPLE (Principio de segregación de interfaz)

> Los clientes no deben ser forzados a depender de los métodos que no utilizan.

Nos dice que ninguna clase debería depender de métodos que no usa, cuando creamos clases, es importante que las interfaces que se implementen, SIEMPRE se van a ocupar, y que también, se puedan agregar nuevos comportamientos a todos los métodos.

Si observas con cuidado, el párrafo anterior, es muy similar al principio de responsabilidad única, ya que ambos se centran en la cohesión de responsabilidades.

Bueno y — ¿qué pasa si no podemos cumplir con este principio? — , lo ideal sería al menos tener interfaces más pequeñas, veamos un ejemplo para entenderlo mejor.

# Ejercicio:

* Aplicar el principio de segregación de interfaz en el siguiente ejemplo de código:

```ts
interface Animal {
    comer(): void;
    volar(): void;
    nadar(): void;
}

class Perro implements Animal {
    comer(): void {
        // Comer
    }

    volar(): void {
        // No hace nada
    }

    nadar(): void {
        // Nadar
    }
}

class Paloma implements Animal {
    comer(): void {
        // Comer
    }

    volar(): void {
        // Volar
    }

    nadar(): void {
        // No hace nada
    }
}
```

* Tu trabajo es lograr que la interfaz Animal sea más pequeña, y que las clases que la implementen, solo implementen los métodos que necesitan.