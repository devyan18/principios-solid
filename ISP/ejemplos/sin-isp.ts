interface Trabajador {
    trabajar(): string

    descansar(): string

    informar(): string
}

class PersonaTrabajadora implements Trabajador {
    trabajar(): string {
        return 'trabajando'
    }

    descansar(): string {
        return 'descansando'
    }

    informar(): string {
        return 'informando'
    }
}

class Gerente implements Trabajador {
    trabajar(): string {
        return 'trabajando'
    }

    descansar(): string {
        return 'descansando'
    }

    informar(): string {
        return 'informando'
    }
}
