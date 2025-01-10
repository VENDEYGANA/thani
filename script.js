document.addEventListener('DOMContentLoaded', cargarDatos);

function guardarDatos() {
    var cuenta = document.getElementById('cuenta').value;
    var fechaRegistro = new Date().toLocaleString();
    var estado = 'Disponible';

    if (cuenta) {
        var registros = JSON.parse(localStorage.getItem('registros')) || [];
        
        var nuevoRegistro = {
            cuenta: cuenta,
            fechaRegistro: fechaRegistro,
            estado: estado,
            correoCliente: '',
            fechaVenta: '',
            fechaVencimiento: '',
            vendedor: ''
        };
        
        registros.push(nuevoRegistro);
        localStorage.setItem('registros', JSON.stringify(registros));
        
        agregarRegistroATabla(nuevoRegistro);

        document.getElementById('cuenta').value = '';
    } else {
        alert('Por favor, ingrese los datos de la cuenta.');
    }
}

function cargarDatos() {
    var registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.forEach(agregarRegistroATabla);
}

function agregarRegistroATabla(registro) {
    var tableBody = document.getElementById('datos-body');
    var row = document.createElement('tr');

    var cellCuenta = document.createElement('td');
    var cellFechaRegistro = document.createElement('td');
    var cellEstado = document.createElement('td');
    var cellCorreoCliente = document.createElement('td');
    var cellFechaVenta = document.createElement('td');
    var cellFechaVencimiento = document.createElement('td');
    var cellVendedor = document.createElement('td');
    var cellCopiar = document.createElement('td');

    cellCuenta.textContent = registro.cuenta;
    cellFechaRegistro.textContent = registro.fechaRegistro;
    cellEstado.innerHTML = `<span class="status-${registro.estado === 'Vendido' ? 'sold' : 'available'}">${registro.estado}</span>`;
    cellCorreoCliente.innerHTML = `<input type="email" value="${registro.correoCliente}" placeholder="Ingrese el correo electrónico" oninput="actualizarEstado(this)">`;
    cellFechaVenta.textContent = registro.fechaVenta;
    cellFechaVencimiento.textContent = registro.fechaVencimiento;
    cellVendedor.innerHTML = `<select>
        <option value="">Seleccione un vendedor</option>
        <option value="Thani" ${registro.vendedor === 'Thani' ? 'selected' : ''}>Thani</option>
        <option value="Ricardo" ${registro.vendedor === 'Ricardo' ? 'selected' : ''}>Ricardo</option>
        <option value="Milagros" ${registro.vendedor === 'Milagros' ? 'selected' : ''}>Milagros</option>
        <option value="Antoni" ${registro.vendedor === 'Antoni' ? 'selected' : ''}>Antoni</option>
        <option value="Aireana" ${registro.vendedor === 'Aireana' ? 'selected' : ''}>Aireana</option>
    </select>`;
    cellCopiar.innerHTML = '<button onclick="copiarDatos(this)">Copiar</button>';

    row.appendChild(cellCuenta);
    row.appendChild(cellFechaRegistro);
    row.appendChild(cellEstado);
    row.appendChild(cellCorreoCliente);
    row.appendChild(cellFechaVenta);
    row.appendChild(cellFechaVencimiento);
    row.appendChild(cellVendedor);
    row.appendChild(cellCopiar);

    tableBody.appendChild(row);
}

function actualizarEstado(input) {
    var row = input.closest('tr');
    var estadoCell = row.cells[2].querySelector('span');
    var fechaVentaCell = row.cells[4];
    var fechaVencimientoCell = row.cells[5];
    var correo = input.value;
    var docId = row.rowIndex - 1;

    if (correo.includes('@')) {
        estadoCell.textContent = 'Vendido';
        estadoCell.classList.remove('status-available');
        estadoCell.classList.add('status-sold');
        var fechaVenta = new Date().toLocaleString();
        var fechaVencimiento = new Date();
        fechaVencimiento.setDate(fechaVencimiento.getDate() + 30);
        var fechaVencimientoFormateada = fechaVencimiento.toLocaleDateString() + ' ' + fechaVencimiento.toLocaleTimeString();

        fechaVentaCell.textContent = fechaVenta;
        fechaVencimientoCell.textContent = fechaVencimientoFormateada;

        var registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros[docId].estado = 'Vendido';
        registros[docId].correoCliente = correo;
        registros[docId].fechaVenta = fechaVenta;
        registros[docId].fechaVencimiento = fechaVencimientoFormateada;
        localStorage.setItem('registros', JSON.stringify(registros));
    } else {
        estadoCell.textContent = 'Disponible';
        estadoCell.classList.remove('status-sold');
        estadoCell.classList.add('status-available');
        fechaVentaCell.textContent = '';
        fechaVencimientoCell.textContent = '';

        var registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros[docId].estado = 'Disponible';
        registros[docId].correoCliente =[_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)[_{{{CITATION{{{_2{](https://github.com/CLONATORE/markdowns/tree/82cfb03683ceb807a7091de48045e6a7485acd72/webpack.md)