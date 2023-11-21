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

    anadirContacto (nombre, numero){
        if(nombre !== '' && !isNaN(numero)){

            let contacto = new Contacto(nombre, numero)

            if (this.contactos.length < this.tananoMaximo){
                this.contactos.push(contacto)
            }
        }
    }

    existeContacto (nombre){
    
        const coincideNombre = this.contactos.filter(c => c.nombre.toLowerCase() === nombre.toLowerCase())
      
        if (coincideNombre.length > 0){
            alert(`Existe el contacto con el nombre ${nombre}`)
        } else {
            alert(`No existe el contacto con el nombre ${nombre}`)
        }
    }

    listarContactos (){
        if(this.contactos.length > 0){
            alert("Revisa la consola, ahi encontras la lista")
            for (let i = 0; i < this.contactos.length; i++){
                console.log(`Contacto ${i+1}: Nombre: ${this.contactos[i].nombre}, número: ${this.contactos[i].telefono}`)
            }
        } else {
            alert("No hay ningun contacto en la lista")
        }
        
    }

    buscarContacto (nombre){
        const buscarPorNombre = this.contactos.filter(c => c.nombre.toLowerCase() === nombre.toLowerCase())
        if (buscarPorNombre.length > 0){
            alert(`Contacto ${buscarPorNombre[0].nombre}, telefono: ${buscarPorNombre[0].telefono}`)
        } else {
            alert(`No se encontró un contacto con el nombre ${nombre}`)
        }
    }

    eliminarContacto (nombre){
        const indicePorNombre = this.contactos.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase())
        if (indicePorNombre !== -1){
            this.contactos.splice(indicePorNombre, 1)
            alert(`Contacto de ${nombre} eliminado`)
        } else {
            alert(`No se encontró un contacto con el nombre ${nombre}`)
        }
    }

    agendaLlena (){
        if (this.contactos.length < 10){
            alert(`La agenda todavía no está llena`)
        } else {
            alert(`La agenda ya está llena`)
        }
    }

    huecosLibres (){
        if (this.contactos.length < 10){
            alert(`Todavía quedan ${(10 - this.contactos.length)} espacios disponibles`)
        } else {
            alert(`La agenda ya está llena`)
        }
    }
}

let agenda = new Agenda()
// let contacto1 = new Contacto('Julio', 1122334455)
// let contacto2 = new Contacto('Jorge', 1122325625)
// let contacto3 = new Contacto('María', 1123456789);
// let contacto4 = new Contacto('Carlos', 1129876543);
// let contacto5 = new Contacto('Laura', 1122334455);
// agenda.anadirContacto(contacto1)
// agenda.anadirContacto(contacto2)
// agenda.anadirContacto(contacto3)
// agenda.anadirContacto(contacto4)
// agenda.anadirContacto(contacto5)

// console.log(`Agenda con 5 contactos`)
// agenda.listarContactos()


// agenda.eliminarContacto('Julio')
// console.log(`Agenda eliminando 1 contacto (Julio)`)
// agenda.listarContactos()

// console.log(`Buscando contacto con el nombre Carlos`)
// agenda.buscarContacto(`Carlos`)

// console.log(`Existe un contacto con el nombre Laura?`)
// agenda.existeContacto('Laura')

// agenda.agendaLlena()
// agenda.huecosLibres()

do {
    let operacion = prompt(`Realizar accion.
    1) Añadir contacto. 
    2) Verificar si existe un contacto. 
    3) Mostrar una lista con todos los contactos. 
    4) Buscar un contacto por nombre. 
    5) Eliminar contacto por nombre. 
    6) Verificar si la agenda ya esta llena. 
    7) Ver cuantos espacios quedan disponibles en la agenda.`)

    switch (operacion){
        case 1:
        case '1': 
        const nombreCrear = prompt("Indica el nombre del contacto que queres agregar")
        const numero = parseInt(prompt("Indique el número"))
        if (nombreCrear !== '' && !isNaN(numero)){
            agenda.anadirContacto(nombreCrear, numero)
        } else {
            alert("Agregá datos válidos")
        }
        break;

        case 2:
        case '2':
        const nombreExiste = prompt("Indica el nombre del contacto el cual queres verificar si ya existe")
        agenda.existeContacto(nombreExiste)
        break;

        case 3:
        case '3':
        agenda.listarContactos()
        break

        case 4:
        case '4':
        const nombreBuscar = prompt("Indica el nombre del contacto al que queres buscar")
        agenda.buscarContacto(nombreBuscar)
        break;

        case 5:
        case '5':
        const nombreEliminar = prompt("Indica el nombre del contacto al que queres eliminar")
        agenda.eliminarContacto(nombreEliminar) 
        break;

        case 6:
        case '6':
        agenda.agendaLlena()
        break;

        case 7:
        case '7':
        agenda.huecosLibres()
        break
    }
} while (confirm("¿Queres seguir realizando operaciones?"))

