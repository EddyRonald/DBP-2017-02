function verResultado() {
  var out = document.getElementById("output");
  var table = document.createElement("div");
  var trNombre = document.createElement("div");
  var trEdad = document.createElement("div");
  var trCursos = document.createElement("div");
  table.className = "container";
  trNombre.className = "row";
  trEdad.className = "row";
  trCursos.className = "row";

  table.border = "1";

  var td1 = document.createElement("div");
  var td2 = document.createElement("div");
  td1.className = "col";
  td2.className = "col";
  td1.innerText = "Nombre:";
  td2.innerText = alumno.nombre;
  trNombre.appendChild(td1);
  trNombre.appendChild(td2);

  td1 = document.createElement("div");
  td2 = document.createElement("div");
  td1.className = "col";
  td2.className = "col";
  td1.innerText = "Edad:";
  td2.innerText = alumno.edad;
  trEdad.appendChild(td1);
  trEdad.appendChild(td2);

  td1 = document.createElement("div");
  td2 = document.createElement("div");
  td1.className = "col";
  td2.className = "col";
  td1.innerText = "Cursos:";
  var ulCursos = document.createElement("OL");
  for (var i=0; i<alumno.cursos.length; i++) {
  
	var liCurso = document.createElement("LI");
	liCurso.innerHTML = alumno.cursos[i];
	ulCursos.appendChild(liCurso);
	liCurso.id = "curso-" + i;

  }

  td2.appendChild(ulCursos);
  trCursos.appendChild(td1);
  trCursos.appendChild(td2);

  table.appendChild(trNombre);
  table.appendChild(trEdad);
  table.appendChild(trCursos);
  out.innerHTML = "";
  out.appendChild(table);
}

function Agregar(){
  var node = document.getElementById("uni").value;
  var x = "node";
  alumno.cursos.push(node);
  verResultado();
}

function Eliminar(){
  var n = document.getElementById("uni").value;

  for(var i=0;i<alumno.cursos.length;i++){
    if( n == i){
        alumno.cursos.splice(i-1,1);        
    }
  }
  verResultado();
}
function Modificar(){
  var n = document.getElementById("uni").value;
  for(var i=0;i<alumno.cursos.length;i++){
    if( n == i){
      var x = document.getElementById("ez").value;
      x = alumno.cursos[i];
      verResultado();
    }
  }
  verResultado();
}