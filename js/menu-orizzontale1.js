if (window.innerWidth >= 1000) {
    moveDivsToEndOfNav();
  
     //MOUSEOVER VS CLICK
      evento='mouseover';
  }
  
  else {
    evento='click';
}

//   SPOSTARE SOTTOMENU SOTTO

function moveDivsToEndOfNav(){

    var submenuPanelTableCentered = document.querySelector('.submenu-panel-table-centered');
    var nav = document.querySelector('nav');
    nav.appendChild(submenuPanelTableCentered);
}

// SHOW TABLE CENTERED


/* 
// Seleccionar todos los elementos con la clase deseada
var elementsWithHas = document.querySelectorAll('.has-table');

// Iterar sobre los elementos y agregar el event listener
elementsWithHas.forEach(elemento => {
  elemento.addEventListener(evento, () => {
    // Ejecutar la función y pasar el elemento clicado como argumento
    showSubmenuPanelTableCentered(elemento);
  });
}); */


var element8WithHas = document.getElementById('menu-8');
// alert(element8WithHas.classList);
element8WithHas.addEventListener(evento, () => {
    // Ejecutar la función y pasar el elemento clicado como argumento
    showSubmenuPanelTableCentered("panel-table.centered-8");
  });





function showSubmenuPanelTableCentered(panelTable){
    // alert("function show");
    // alert(elementWithHasTable.classList);
    var submenuPanelTableCentered = document.getElementById(panelTable);
    submenuPanelTableCentered.classList.add("show");
    
}

