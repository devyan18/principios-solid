class Notificador {
  enviarCorreo(mensaje: string) {
    // Lógica para enviar un correo
    console.log('Correo enviado:', mensaje);
  }
}

class Cliente {
  private notificador: Notificador;

  constructor() {
    this.notificador = new Notificador();
  }

  realizarAccion() {
    this.notificador.enviarCorreo('Realizando una acción');
  }
}

const cliente = new Cliente();
cliente.realizarAccion();  // Output: Correo enviado: Realizando una acción
