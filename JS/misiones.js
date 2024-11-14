class Misiones{
    constructor(nombreRobot,lugar,completada){
        this.nombreRobot = nombreRobot;
        this.lugar = lugar;
        this.completada = completada;
    }
}

const misiones = [
    new Misiones('MH42-Z','Luna Fobos','si'),
    new Misiones('LO12-A','Luna Deimos','si'),
    new Misiones('HQ91-D','Luna Eorupa','si'),
    new Misiones('BV57-C','Luna Calisto','si'),
    new Misiones('XD33-X','Luna de la Tierra','no'),
];


const crearTabla = () => {
    
    const tabla_contenedor = document.getElementById('tabla-contenedor');
    const tabla = document.getElementById('tabla');

    // Crear el colgroup
    const colgroup = document.createElement('colgroup');
    
    for (let i = 0; i < 3; i++) {
        const col = document.createElement('col');
        colgroup.appendChild(col);
    }
    tabla.appendChild(colgroup);

    
    const thead = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    filaCabecera.innerHTML = `
        <th>Nombre:</th>
        <th>Lugares:</th>
        <th>Completada:</th>
    `;
    thead.appendChild(filaCabecera);
    tabla.appendChild(thead);


    const tbody = document.createElement('tbody');

    misiones.forEach(mision => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${mision.nombreRobot}</td>
            <td>${mision.lugar}</td>
            <td>${mision.completada}</td>
        `;
        tbody.appendChild(fila);
    });
    tabla.appendChild(tbody);


    tabla_contenedor.appendChild(tabla);
};


crearTabla();