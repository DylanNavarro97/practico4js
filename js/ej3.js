function verificarDato(dato){
    if (typeof dato === 'number' && !isNaN(dato) && dato > 0){
        return dato
    } else {
        return(`No se ingresó un número válido`)
    }
}

class Rectangulo {
    constructor (alto, ancho){
        this.alto = verificarDato(alto)
        this.ancho = verificarDato(ancho)
    }

    cambiarAltura(nuevaAltura){
        this.alto = verificarDato(nuevaAltura)
    }

    cambiarAncho(nuevoAncho){
        this.ancho = verificarDato(nuevoAncho)
    }

    calcularPerimetro(){
        if (typeof this.alto === 'number' && typeof this.ancho === 'number' ){
            this.perimetro = (this.alto * 2) + (this.ancho * 2)
            console.log(`El perímetro del rectángulo es de ${this.perimetro}m`)
        } else {
            this.perimetro = `No se puede obtener el perimetro con datos incorrectos`
            console.log(this.perimetro)
        }
    }

    calcularArea(){
        if (typeof this.alto === 'number' && typeof this.ancho === 'number' ){
            this.area = this.alto * this.ancho
            console.log(`El área del rectángulo es de ${this.area}m2`)
        } else {
            this.area = `No se puede obtener el área con datos incorrectos`
            console.log(this.area)
        }
    }

    mostrarPropiedades(){
        if (typeof this.alto === 'number' && typeof this.ancho === 'number'){
            console.log(`El alto del rectángulo es de ${this.alto}m y su ancho es de ${this.ancho}m`)
        } else {
            console.log(`El rectángulo no cuenta con datos válidos`)
        }
        
    }

}

const rectangulo1 = new Rectangulo(4,3)
console.log(rectangulo1)
rectangulo1.mostrarPropiedades()
rectangulo1.calcularPerimetro()
rectangulo1.calcularArea()
rectangulo1.cambiarAltura(7)
rectangulo1.cambiarAncho(6)
rectangulo1.calcularPerimetro()
rectangulo1.calcularArea()
rectangulo1.mostrarPropiedades()
console.log(rectangulo1)