// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:



// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

const auto = {
    color: 'blanco',
    marca: 'Ford',
    modelo: 'Focus',
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log('Auto encendido');
      } else {
        console.log('El auto ya está encendido');
      }
    },

    apagar: function() {
    if (this.encendido) {
      this.encendido = false;
      console.log('El auto se apagó');
    } else {
      console.log('El auto ya está apagado');
    }
  }
}

auto.encender()
auto.apagar()