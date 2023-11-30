 // Obtén todos los elementos con la clase "btn-p"
 let facturas = document.querySelectorAll('.btn-p');
 const contenedorFacturas= document.querySelector('#content-productos');

 // Agrega un evento de clic a cada elemento con la clase "btn-p"
 facturas.forEach(function(factura) {
     factura.addEventListener('click', function(event) {
         // Evita que el enlace realice la acción predeterminada (navegar a otra página)
         event.preventDefault();
        // Crear una nueva fila
        agregarProducto(11131315112,"Nuevo producto de 100litros",20000,2,5000);
     
         console.log(event.target.textContent);

         // Puedes agregar aquí cualquier código adicional que desees ejecutar al hacer clic en el enlace
         console.log('Hiciste clic en el enlace con la clase "btn-p"');
         
         // Aquí puedes agregar más acciones relacionadas con el clic en el enlace
     });
 });

function agregarProducto(id,producto,precio,cantidad,descuento){
    const nuevaFila = document.createElement('tr');
    nuevaFila.id = 'producto01'; //

     // Contenido de la nueva fila
     nuevaFila.innerHTML = `
     <th class="id">${id}</th>
     <th title="Este es un producto de 100ml" class="producto">${producto}</th>
     <th class="precio"><span class="moneda">$</span><span class="valor">${precio}</span></th>
     <th class="cantidad">${cantidad}</th>
     <th class="descuento"><span class="moneda">$</span> <span class="valor">${descuento}</span></th>
     <th class="total"><span class="moneda">$</span> <span class="valor">${(precio*cantidad)-descuento}</span></th>
     <th><img src="./public/img/Rectangle 88.png" alt=""></th>
 `;

 // Agregar la nueva fila al contenedor
 contenedorFacturas.appendChild(nuevaFila);
}