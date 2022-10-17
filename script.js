const SHEET_ID = "1vGH388JngIsEFa2qCaCuc68uJB7POOiHvz4pdkdBYGo";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXOyJkJbt157Z39C_8D2dkQzXHBvdGuciV9i1kVxO5diCwqIJzsIkkLVhvbS2nDOEd6PifqORr-XgHEiU6OISnNfRnokpcBFBfBlZ6pmd0DgNAJJGPNwYPdawaV3et75lbnoR7fZNDokvTnaLy_cycxxaCgYKATASARISFQEjDvL9mO_nWMLIied3quUZcJ6LSA0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/bebidas!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
).then(function (response) {
  //esperamos el json del response para poder utilizarlo
  response.json().then(function (data) {
  const values = data.values;

  // Obtenemos el elemento del dom
  const lista = document.getElementById("lista-menu");

  for (var i = 0; i < values.length; i++) {

      // Div que va a contener los datos del producto
      const producto = document.createElement("div");
      producto.className =  "menu-item";

      // Nombre del producto
      const itemProducto = document.createElement("span");
      itemProducto.className = "item producto";
      itemProducto.innerHTML = values[i][0]; 

      // Precio
      const itemPrecio = document.createElement("span");
      itemPrecio.className = "item precio";
      itemPrecio.innerHTML = values[i][2];

      // Descripcion
      const itemDescripcion= document.createElement("span");
      itemDescripcion.className = "item descripcion";
      itemDescripcion.innerHTML = values[i][1];

      // Agregamos todos los elementos al div de producto
      producto.appendChild(itemProducto);
      producto.appendChild(itemPrecio);
      producto.appendChild(itemDescripcion);

      // Agregamos el producto a la lista
      lista.appendChild(producto);
  }
  });
});