class Tarea {
    constructor(private descripcion: string, private completada: boolean) { }

    marcarComoCompletada() {
        this.completada = true;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    estaCompletada() {
        return this.completada;
    }
}

class GestorDeTareas {
    private tareas: Tarea[] = [];

    agregarTarea(tarea: Tarea) {
        this.tareas.push(tarea);
    }

    listarTareasCompletadas() {
        return this.tareas.filter((tarea) => tarea.estaCompletada());
    }

    listarTareasPendientes() {
        return this.tareas.filter((tarea) => !tarea.estaCompletada());
    }
}

const tarea1 = new Tarea("Hacer la compra", false);
const tarea2 = new Tarea("Terminar el informe", false);

const gestorDeTareas = new GestorDeTareas();

gestorDeTareas.agregarTarea(tarea1);
gestorDeTareas.agregarTarea(tarea2);

tarea1.marcarComoCompletada();

const tareasCompletadas = gestorDeTareas.listarTareasCompletadas();
const tareasPendientes = gestorDeTareas.listarTareasPendientes();

console.log("Tareas Completadas:", tareasCompletadas);
console.log("Tareas Pendientes:", tareasPendientes);