var SelectedRow = null;

function onFormSubmit(){
    var formData = readFormData();   
    
    if (SelectedRow === null) {
        insetNewRecord(formData);
        localStorage.setItem(formData.nombre, JSON.stringify(formData));
    }else
    updateRecord(formData)
    localStorage.setItem(formData.nombre, JSON.stringify(formData));
    resetForm()
 
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["grado"] = document.getElementById("grado").value;
    formData["direccion"] = document.getElementById("direccion").value;
    return formData;
}

function insetNewRecord(dato) {
    var table = document.getElementById("datos_estudiante").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
     cell1 = newRow.insertCell(0);
     cell1.innerHTML = dato.nombre;
     cell2 = newRow.insertCell(1);
     cell2.innerHTML = dato.grado;
     cell3 = newRow.insertCell(2);
     cell3.innerHTML = dato.direccion;
     cell3 = newRow.insertCell(3);
     cell3.innerHTML =  ` <input type="button" value="Edit" onClick="onEdit(this)">
                          <input type="button" value="delite" onClick="onDelite(this)">`;
                 
}


 
function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("grado").value = "";
    document.getElementById("direccion").value = "";
    SelectedRow = null;
}

function onEdit(tb) {
    SelectedRow = tb.parentElement.parentElement
    document.getElementById("nombre").value = SelectedRow.cells[0].innerHTML;
    document.getElementById("grado").value = SelectedRow.cells[1].innerHTML;
    document.getElementById("direccion").value = SelectedRow.cells[2].innerHTML;
    localStorage.removeItem(document.getElementById("nombre").value)
}

function updateRecord(formData) {
    SelectedRow.cells[0].innerHTML = formData.nombre;
    SelectedRow.cells[1].innerHTML = formData.grado;
    SelectedRow.cells[2].innerHTML = formData.direccion;
}

function onDelite(tb) {
    if (confirm('Estas seguro que quieres eliminar los datos')) {
        row = tb.parentElement.parentElement
    document.getElementById("datos_estudiante").deleteRow(row.rowIndex);

    resetForm()
    }
 
}



function obtener_local() {
  let dato = document.getElementById("local-estudiante").value;
  let local = JSON.parse(localStorage.getItem(dato));

  
  insetNewRecord(local)

  };


