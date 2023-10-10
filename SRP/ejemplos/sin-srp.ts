class Tarea {
    constructor(private descripcion: string, private completada: boolean) {}

    marcarComoCompletada() {
        this.completada = true;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    estaCompletada() {
        return this.completada;
    }

    guardarEnBaseDeDatos() {
        // Código para guardar la tarea en la base de datos
    }
}

const tarea1 = new Tarea("Hacer la compra", false);
const tarea2 = new Tarea("Terminar el informe", false);

tarea1.marcarComoCompletada();

const tareasCompletadas = [tarea1, tarea2].filter((tarea) => tarea.estaCompletada());
const tareasPendientes = [tarea1, tarea2].filter((tarea) => !tarea.estaCompletada());

console.log("Tareas Completadas:", tareasCompletadas);
console.log("Tareas Pendientes:", tareasPendientes);

tarea1.guardarEnBaseDeDatos();
tarea2.guardarEnBaseDeDatos();