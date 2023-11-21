class Producto {
    constructor (codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        if(typeof precio === 'number' && precio > 0){
            this.precio = precio
        }
    }

    imprimirDatos() {
        console.log(`El nombre del producto es ${this.nombre}, su precio es de ${this.precio}, y su código es ${this.codigo}`)
    }

}

const producto1 = new Producto(1, 'Remera', 6000);
const producto2 = new Producto(2, 'Calculadora', 5000);
const producto3 = new Producto(3, 'Libro', 2000);

const arrayProductos = [producto1, producto2, producto3]

for (i = 0; i < arrayProductos.length; i++){
    arrayProductos[i].imprimirDatos()
}

