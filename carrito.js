
const Producto = function(nombre,precio){
    this.nombre = nombre,
    this.precio = precio
}

let producto1= new Producto ("aretes",250)
let producto2= new Producto ("pulsera",350)
let producto3= new Producto ("collar",700)
let producto4= new Producto ("anillo",300)

let lista = [producto1,producto2,producto3,producto4]
//console.log("lista de productos",lista);

let  seleccion = prompt("Hola,deseas comprar algun producto? si o no?")
while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola deseas comprar algo si o no")
}


//recorro el array lista y verifico el nombre y precio de producto
for (let i = 0; i < lista.length; i++) {
   // console.log("Nombre del producto: " + lista[i].nombre);
   // console.log("Precio del producto: " + lista[i].precio);
  }

//almaceno los elementos obtenidos en la variable informacionProducto
  let informacionProductos = "";
  
lista.forEach(function(producto) {
  informacionProductos += "Nombre del producto: " + producto.nombre + "\n";
  informacionProductos += "Precio del producto: " + producto.precio + "\n\n";
});
//veriico
//alert(informacionProductos);

if (seleccion == "si") {
    alert(" te muestro nuestra lista de productos");
    alert(informacionProductos);

  }else  {
        alert("Gracias por visitarnos,vuelve pronto!!!");
      
        }
    
//console.log(informacionProductos);
//alert( informacionProductos);


let opciones = "";

//recorro lista y almaceno en opciones
lista.forEach(function(producto) {
  opciones += producto.nombre + "\n";
});

let carrito = [];
//funcion para encontrar el match del producto seleccionado
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
    return;
  }
  }


let nombreProducto = prompt("Ingrese el nombre del producto:");

let productoEncontrado = lista.find(function(producto) {
  return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
});

if (productoEncontrado) {
  agregarAlCarrito(nombreProducto);
} else {
  //console.log("No se encontró ningún producto con ese nombre.");
  alert("No se encontró ningún producto con ese nombre.");

}
