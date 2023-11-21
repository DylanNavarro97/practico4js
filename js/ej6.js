class Libro {
    #_ISBN
    #_titulo
    #_autor
    #_numeroDePaginas
    constructor (ISBN, titulo, autor, numeroDePaginas){
        this.#_ISBN = ISBN
        this.#_titulo = titulo
        this.#_autor = autor
        this.#_numeroDePaginas = numeroDePaginas
    }

    get ISBN() {
        return this.#_ISBN;
    }

    set cambiarISBN(valorISBN) {
        this.#_ISBN = valorISBN;
    }

    get titulo() {
        return this.#_titulo;
    }

    set cambiarTitulo(valorTitulo) {
        this.#_titulo = valorTitulo;
    }

    get autor() {
        return this.#_autor;
    }

    set autor(valorAutor) {
        this.#_autor = valorAutor;
    }

    get numeroDePaginas() {
        return this.#_numeroDePaginas;
    }

    set numeroDePaginas(nuevaCantidad) {
        this.#_numeroDePaginas = nuevaCantidad;
    }

    mostrarLibro() {
        console.log(`El libro "${this.#_titulo}" con ISBN ${this.#_ISBN} creado por el autor ${this.#_autor} tiene ${this.#_numeroDePaginas} páginas`)
    }
}

const libro1 = new Libro(8952, 'El señor de los anillos', 'J.R.R', 1178)
const libro2 = new Libro(9854, 'Harry Potter', 'J.K. Rowling', 752);
console.log(libro1)
libro1.mostrarLibro()
console.log(libro2)
libro2.mostrarLibro()

if (libro1.numeroDePaginas > libro2.numeroDePaginas){
    console.log(`El libro "${libro1.titulo}" Tiene mas páginas que "${libro2.titulo}"`)
} else {
    console.log(`El libro "${libro2.titulo}" Tiene mas páginas que "${libro1.titulo}"`)
}