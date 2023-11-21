class Animal {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    emitirSonido(){
        console.log('Sonido de un animal')
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza){
        super(nombre, edad)
        this.raza = raza
    }

    emitirSonido() {
        alert(`${this.nombre} es un ${this.raza}, tiene ${this.edad} años y esta ladrando: "Guau, Guau"`)
    }
}

class Gato extends Animal {
    constructor(nombre, edad, color){
        super(nombre, edad)
        this.color = color
    }

    emitirSonido() {
        alert(`${this.nombre} es un gato ${this.color}, tiene ${this.edad} años y esta maullando: "Miau, Miau"`)
    }
}

const perro = new Perro("Ringo", 2, "Bulldog frances");
perro.emitirSonido();

const gato = new Gato("Salem", 5, "Negro");
gato.emitirSonido();