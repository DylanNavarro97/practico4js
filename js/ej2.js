const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function(cantidad){
        if (!isNaN(cantidad) && cantidad > 0){
            this.saldo = this.saldo + cantidad
            console.log(`Ingresó $${cantidad}. Su saldo actual es de $${this.saldo}`)
        } else {
            console.log("Ingrese una cantidad válida")
        }
    },

    extraer: function(cantidad) {
        if (!isNaN(cantidad) && cantidad > 0){
            if (cantidad <= this.saldo){
                this.saldo = this.saldo - cantidad
                console.log(`Retiró $${cantidad}. Su saldo actual es de $${this.saldo}`)
            } else {
                console.log(`Ingrese un monto menor o igual a su saldo actual. Su saldo actual es de $${this.saldo}`)
            }
        } else {
            console.log(`Ingrese una cantidad válida`)
        }
    },

    informar: function(){
        console.log(`Nombre del titular de la cuenta: ${this.titular}. El saldo actual de la cuenta es de: $${this.saldo}`)
    }
}

cuenta.informar()
cuenta.ingresar(100)
cuenta.extraer(75)
cuenta.informar()

