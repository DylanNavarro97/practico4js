class Persona {
    constructor (nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    saludar (){
        alert(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años y mi profesion es ser ${this.profesion}`)
    }

    despedirse (){
        alert(`Me tengo que ir. ¡Nos vemos pronto!`)
    }
}

const persona1 = new Persona('Alvaro', 27, 'programador')
const persona2 = new Persona('Bruno', 35, 'cantante')

persona1.saludar()
persona1.despedirse()
persona2.saludar()
persona2.despedirse()