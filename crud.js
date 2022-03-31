function onFormSubmit(){
    var formData = readFormData();
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").Value;
    formData["grado"] = document.getElementById("grado").Value;
    formData["direccion"] = document.getElementById("direccion").Value;
    return formData;
}

function insetNewRecord(dato) {
    var table = document.getElementById("datos_estudiante").getElementsByTagName('tbody')
}