// Desarrollar un programa en JavaScript que permita calcular el descuento aplicado a una compra
// según el monto total y la categoría del cliente (Regular o VIP).
// Finalmente, muestra el monto final a pagar y un texto que indique el descuento aplicado.

// Reglas de descuento:
// - Si el cliente es "Regular" y gasta menos de $50, no tiene descuento.
// - Si el cliente es "Regular" y gasta entre $50 (inclusive) y $100, tiene un 5% de descuento.
// - Si el cliente es "Regular" y gasta más de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta menos de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta $100 o más, tiene un 20% de descuento.

let TipoDeCliente = document.getElementById("Cliente");
let montoIngresado = document.getElementById("monto");
let Descuento = document.getElementById("descuento");
let TotalAPagar = document.getElementById("TotalAPagar");

let Cliente = prompt("Ingrese su tipo de cliente: Regular o Vip").toLowerCase();

// Validación: verificar si el cliente es Regular o VIP
if (Cliente !== "regular" && Cliente !== "vip") {
  alert("Por favor, ingrese un tipo de cliente válido. Regular o VIP");
  /*return;*/
}

let Monto = parseFloat(prompt("Ingrese el monto total de su compra:")); // Convertir a número flotante

// Validación: verificar si el monto es un número válido
if (isNaN(Monto)) {
  alert("Por favor, ingrese un monto válido.");
  /*return;*/
}

if (Cliente == "regular") {
  if (Monto < 50) {
    TipoDeCliente.innerHTML = "Cliente Regular";
    montoIngresado.innerHTML = "Monto total: $ " + Monto;
    Descuento.innerHTML = "No tiene descuento";
    TotalAPagar.innerHTML = "Total a Pagar $ " + Monto.toFixed(2);
  } else if (Monto >= 50 && Monto <= 100) {
    TipoDeCliente.innerHTML = "Cliente Regular";
    montoIngresado.innerHTML = "Monto total: $ " + Monto;
    Descuento.innerHTML = "Descuento del 5%";
    TotalAPagar.innerHTML =
      "Total a Pagar con Descuento $ " + (Monto - Monto * 0.05).toFixed(2);
  } else if (Monto > 100) {
    TipoDeCliente.innerHTML = "Cliente Regular";
    montoIngresado.innerHTML = "Monto total: $ " + Monto;
    Descuento.innerHTML = "Descuento del 10%";
    TotalAPagar.innerHTML =
      "Total a Pagar con Descuento $ " + (Monto - Monto * 0.1).toFixed(2);
  }
} else if (Cliente == "vip") {
  if (Monto < 100) {
    TipoDeCliente.innerHTML = "Cliente VIP";
    montoIngresado.innerHTML = "Monto total: $ " + Monto;
    Descuento.innerHTML = "Descuento del 10%";
    TotalAPagar.innerHTML =
      "Total a Pagar con Descuento $ " + (Monto - Monto * 0.1).toFixed(2);
  } else if (Monto >= 100) {
    TipoDeCliente.innerHTML = "Cliente VIP";
    montoIngresado.innerHTML = "Monto total: $ " + Monto;
    Descuento.innerHTML = "Descuento del 20%";
    TotalAPagar.innerHTML =
      "Total a Pagar con Descuento $ " + (Monto - Monto * 0.2).toFixed(2);
  }
}
