class Contacto {
    constructor (nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}

class Agenda {
    constructor (){
        this.contactos = []
        this.tananoMaximo = 10
    }

    anadirContacto (contacto){
        if (this.contactos.length < this.tananoMaximo){
            this.contactos.push(contacto)
        }
    }

    existeContacto (nombre){
    
        const coincideNombre = this.contactos.filter(c => c.nombre.toLowerCase() === nombre.toLowerCase())
      
        if (coincideNombre.length > 0){
            console.log(`Existe el contacto con el nombre ${nombre}`)
        } else {
            console.log(`No existe el contacto con el nombre ${nombre}`)
        }
    }

    listarContactos (){
        for (let i = 0; i < this.contactos.length; i++){
            console.log(`Contacto ${i+1}: Nombre: ${this.contactos[i].nombre}, número: ${this.contactos[i].telefono}`)
        }
    }

    buscarContacto (nombre){
        const buscarPorNombre = this.contactos.filter(c => c.nombre.toLowerCase() === nombre.toLowerCase())
        if (buscarPorNombre.length > 0){
            console.log(`Contacto ${buscarPorNombre[0].nombre}, telefono: ${buscarPorNombre[0].telefono}`)
        } else {
            console.log(`No se encontró un contacto con el nombre ${nombre}`)
        }
    }

    eliminarContacto (nombre){
        const indicePorNombre = this.contactos.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase())
        if (indicePorNombre !== -1){
            this.contactos.splice(indicePorNombre, 1)
        } else {
            console.log(`No se encontró un contacto con el nombre ${nombre}`)
        }
    }

    agendaLlena (){
        if (this.contactos.length < 10){
            console.log(`La agenda todavía no está llena`)
        } else {
            console.log(`La agenda ya está llena`)
        }
    }

    huecosLibres (){
        if (this.contactos.length < 10){
            console.log(`Todavía quedan ${(10 - this.contactos.length)} espacios disponibles`)
        } else {
            console.log(`La agenda ya está llena`)
        }
    }
}

let agenda = new Agenda()
let contacto1 = new Contacto('Julio', 1122334455)
let contacto2 = new Contacto('Jorge', 1122325625)
let contacto3 = new Contacto('María', 1123456789);
let contacto4 = new Contacto('Carlos', 1129876543);
let contacto5 = new Contacto('Laura', 1122334455);
agenda.anadirContacto(contacto1)
agenda.anadirContacto(contacto2)
agenda.anadirContacto(contacto3)
agenda.anadirContacto(contacto4)
agenda.anadirContacto(contacto5)

console.log(`Agenda con 5 contactos`)
agenda.listarContactos()


agenda.eliminarContacto('Julio')
console.log(`Agenda eliminando 1 contacto (Julio)`)
agenda.listarContactos()

console.log(`Buscando contacto con el nombre Carlos`)
agenda.buscarContacto(`Carlos`)

console.log(`Existe un contacto con el nombre Laura?`)
agenda.existeContacto('Laura')

agenda.agendaLlena()
agenda.huecosLibres()

