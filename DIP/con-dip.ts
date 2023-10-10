interface INotificador {
    enviarCorreo(mensaje: string): void;
}

class Notificador implements INotificador {
    enviarCorreo(mensaje: string) {
        console.log('Correo enviado:', mensaje);
    }
}

class Cliente {
    private notificador: INotificador;

    constructor(notificador: INotificador) {
        this.notificador = notificador;
    }

    realizarAccion() {
        this.notificador.enviarCorreo('Realizando una acción');
    }
}

const notificador = new Notificador();
const cliente = new Cliente(notificador);
cliente.realizarAccion();  // Output: Correo enviado: Realizando una acción
