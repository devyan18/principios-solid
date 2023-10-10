interface Trabajador {
    trabajar(): void
}

// Interfaz para trabajadores que pueden tomar descansos
interface Descanso {
    descansar(): void
}

// Interfaz para trabajadores que pueden informar sobre el trabajo
interface Informante {
    informar(): void
}


class Empleado implements Trabajador, Descanso {
    trabajar() {
       return "Trabajando";
    }

    descansar() {
        return "Descansando";
    }
}

class Gerente implements Trabajador, Informante {
    trabajar() {
        return "Trabajando";
    }

    informar() {
        return "Informando";
    }
}