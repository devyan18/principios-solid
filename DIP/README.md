# DEPENDENCY INVERSION PRINCIPLE (Principio de inversión de dependencia)

> A. Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

> B. Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.

Los componentes principales de la aplicación no deben depender de los detalles de la implementación (framework, base de datos, conexiones, etc.) ya que todos estos aspectos se van a especificar mediante interfaces, así los componentes no tendrán que preocuparse por cómo o donde esté implementado.


# Ejercicio:

* Aplicar el principio de inversión de dependencia en el siguiente ejemplo de código:

```ts
class MySQL {
    private connection: any;

    constructor() {
        // Conexión a MySQL
    }

    public query(query: string): any[] {
        // Ejecutar query
        return [];
    }
}

class ProductService {
    constructor(private db: MySQL) {}

    public save(product: any): void {
        // Guardar producto
        this.db.query('...');
    }
}
```

* Tu trabajo es lograr que la clase `ProductService` no dependa de la clase `MySQL`, sino que dependa de una interfaz que especifique los métodos que necesita, y que la clase `MySQL` implemente dicha interfaz.