
const Producto = function(nombre,precio){
    this.nombre = nombre,
    this.precio = precio
}

let producto1= new Producto ("aretes",250)
let producto2= new Producto ("pulsera",350)
let producto3= new Producto ("collar",700)
let producto4= new Producto ("anillo",300)

let lista = [producto1,producto2,producto3,producto4]
console.log("lista de productos",lista);

let  seleccion = prompt("Hola,deseas comprar algun producto? si o no?")
while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola deseas comprar algo si o no")
}



//recorro el array lista y verifico el nombre y precio de producto
for (let i = 0; i < lista.length; i++) {
    console.log("Nombre del producto: " + lista[i].nombre);
    console.log("Precio del producto: " + lista[i].precio);
  }
//almaceno los elementos obtenidos en la variable informacionProducto
  let informacionProductos = "";
  

lista.forEach(function(producto) {
  informacionProductos += "Nombre del producto: " + producto.nombre + "\n";
  informacionProductos += "Precio del producto: " + producto.precio + "\n\n";
});

//alert(informacionProductos);
/*
for (let i = 0; i < lista.length; i++) {
  informacionProductos += "Nombre del producto: " + lista[i].nombre + "\n";
  informacionProductos += "Precio del producto: " + lista[i].precio + "\n\n";
}
*/
if (seleccion == "si") {
    alert(" te muestro nuestra lista de productos");
    alert(informacionProductos);

  }else if(seleccion== "no"){
        alert("Gracias por visitarnos,vuelve pronto!!!")
    }

console.log(informacionProductos);
//alert( informacionProductos);



let opciones = "";

lista.forEach(function(producto) {
  opciones += producto.nombre + "\n";
});
/*
let nombreProducto = prompt("Seleccione un producto:\n\n" + opciones);

let productoSeleccionado = lista.find(function(producto) {
  return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
});

if (productoSeleccionado) {
  console.log("Producto seleccionado: " + productoSeleccionado.nombre + " - Precio: $" + productoSeleccionado.precio);
  alert("Producto seleccionado: " + productoSeleccionado.nombre + " - Precio: $" + productoSeleccionado.precio);
} else {
  console.log("No se encontró ningún producto con ese nombre.");
  alert("No se encontró ningún producto con ese nombre.");
}
*/




/*
let productoSeleccionado = lista.filter(function(producto) {
    return producto.precio > 500;
  });
  //verifico que el usuario coloque un producto
  if (productoSeleccionado.length > 0) {
    console.log("Producto seleccionado: " + productoSeleccionado[0].nombre + " - Precio: $" + productoSeleccionado[0].precio);
    alert("Producto seleccionado: " + productoSeleccionado[0].nombre + " - Precio: $" + productoSeleccionado[0].precio);
    console.log("¡Felicidades! Has ganado un vale de descuento.");
    alert("¡Felicidades! Has ganado un vale de descuento.");
  } else {
    console.log("No se encontraron productos con precio mayor a 500.");
    alert("No se encontraron productos con precio mayor a 500.");
    
  }

*/
/*
let carrito = [];

function agregarAlCarrito(nombreProducto) {
  let productoSeleccionado = lista.find(function(producto) {
    return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
  });

  if (productoSeleccionado) {
    carrito.push(productoSeleccionado);
    console.log("Producto agregado al carrito: " + productoSeleccionado.nombre + " - Precio: $" + productoSeleccionado.precio);
    alert("Producto agregado al carrito: " + productoSeleccionado.nombre + " - Precio: $" + productoSeleccionado.precio);
  } else {
    console.log("No se encontró ningún producto con ese nombre.");
    alert("No se encontró ningún producto con ese nombre.");
  }
}

agregarAlCarrito("Producto 1");
agregarAlCarrito("Producto 2");
agregarAlCarrito("Producto 3");

*/
let carrito = [];

function agregarAlCarrito(nombreProducto) {
  let productoSeleccionado = lista.find(function(producto) {
    return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
  });

  if (productoSeleccionado) {
    carrito.push(productoSeleccionado);
    console.log("Producto agregado al carrito: " + productoSeleccionado.nombre + " - precio: $" + productoSeleccionado.precio);
    alert("Producto agregado al carrito: " + productoSeleccionado.nombre + " - precio: $" + productoSeleccionado.precio);
  } else {
    console.log("No se encontró ningún producto con ese nombre.");
    alert("No se encontró ningún producto con ese nombre.");
  }
  }


let nombreProducto = prompt("Ingrese el nombre del producto:");

let productoEncontrado = lista.find(function(producto) {
  return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
});

if (productoEncontrado) {
  agregarAlCarrito(nombreProducto);
} else {
  console.log("No se encontró ningún producto con ese nombre.");
  alert("No se encontró ningún producto con ese nombre.");

}
