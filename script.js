function porcentaje(precio,porcentaje,cien) {
    return (precio*porcentaje)/cien
}

let compraRopa = [
    {
        articulo: "musculosa castelo",
        precio: 2700,
    },
    {
        articulo: "body conex",
        precio: 3200,
    },
    {
        articulo: "body rubik",
        precio: 3400,
    },
    {
        articulo: "body story",
        precio: 3500,
    },
    {
        articulo: "mini agus",
        precio: 3500,
    },
    {
        articulo: "mini praia",
        precio: 4200,
    },
    {
        articulo: "musculosa castelo",
        precio: 2700,
    }
]



let arrayNueva=[];

do {
    let queArticulo = prompt("que articulo queres?");

    if (queArticulo=="no quiero mas articulos") {
        alert("iniciar compra");
        let precioFinal=arrayNueva.reduce((prev,valor)=>{
            return prev+valor.precioTotal
        },0)
        alert("tienes que pagar "+precioFinal);
        if(precioFinal>=20.000){
            alert("pero como tu valor es mas o igual de $20000 te hacemos el descuento del 20%");
            let descuento = porcentaje(precioFinal, 20, 100);
            // Actualizar el precio total en cada elemento del array
            arrayNueva.forEach((elemento) => {
                elemento.precioTotal -= descuento;
            });
        }
        break;
    }else{
        let pregunta=parseInt(prompt("que cantidad queres de ese articulo?"));
        let articuloElegido = compraRopa.find((articulo) => articulo.articulo === queArticulo);
        if (articuloElegido==undefined) {
            alert("ese articulo no existe,intente otra vez");
        } else {
            arrayNueva.push({articulo: queArticulo, precioUnitario:articuloElegido.precio, cantidad: pregunta, precioTotal:articuloElegido.precio*pregunta});
        }
    }
    
} while (true);

console.log(arrayNueva);
