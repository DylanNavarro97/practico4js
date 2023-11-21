function verificarNumeroSimple(numero) {
    if (typeof numero === 'number' && numero > 0){
        return numero
    }
}

class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre
        this.edad = verificarNumeroSimple(edad)
        if (typeof dni === 'number' && dni.toString.length <= 8 && dni > 0){
            this.dni = dni
        }
        if (typeof sexo === 'string'){
            if (sexo.toLowerCase() === 'h'){
                this.sexo = 'hombre'
            } else if (sexo.toLowerCase() === 'm'){
                this.sexo = 'mujer'
            }
        } else {
            this.sexo = `No se especificó`
        }
        
        this.peso = `${verificarNumeroSimple(peso)}kg`
        this.altura = `${verificarNumeroSimple(altura)}cm`
        this.anioNacimiento = verificarNumeroSimple(anioNacimiento)
    }

    mostrarGeneracion() {
        let anio = this.anioNacimiento
        if (anio >= 1930 && anio <= 1948){
            console.log(`Pertenece a "Silent Generation" y su rasgo característico es: Austeridad`)
        } else if (anio >= 1949 && anio <= 1968){
            console.log(`Pertenece a "Baby Boom" y su rasgo característico es: Ambición`)
        } else if (anio >= 1969 && anio <= 1980){
            console.log(`Pertenece a "Generacion X" y su rasgo característico es: Obsesión por el éxito`)
        } else if (anio >= 1981 && anio <= 1993){
            console.log(`Pertenece a "Generacion Y" y su rasgo característico es: Frustración`)
        } else if(anio >= 1994 && anio <= 2010){
            console.log(`Pertenece a "Generacion Z" y su rasgo característico es: Irreverencia`)
        }
    }

    esMayorDeEdad() {
        if (typeof this.edad === 'number' && this.edad > 18){
            console.log(`Es mayor de edad`)
        } else {
            console.log(`Es menor de edad`)
        }
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, DNI: ${this.dni}, sexo: ${this.sexo}, peso: ${this.peso}, altura: ${this.altura}, año de nacimiento: ${this.anioNacimiento}`)
    }

    generaDNI() {
        this.dni = Math.floor(10000000 + Math.random() * 90000000);
    }

}

const persona1 = new Persona('Frank', 69, 15395856, 'h', 76, 178, 1954)
console.log(persona1)
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()
persona1.mostrarDatos()
persona1.generaDNI()
console.log(persona1)
