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

    var submenuPanelTableCentered = document.querySelector('.submenu-panel-table-centered-container');
    var nav = document.querySelector('header');
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


element8WithHas.addEventListener(evento, () => {
  // Ejecutar la función y pasar el elemento clicado como argumento
  showSubmenuPanelTableCentered("panel-table-centered-8-container");
});


/* element8WithHas.addEventListener(evento, prova);
function prova() {
    alert("prova");
  } */





function showSubmenuPanelTableCentered(panelTable){
    // alert("function show");
    // alert(elementWithHasTable.classList);
    var submenuPanelTableCenteredContainer = document.getElementById(panelTable);
    // alert(submenuPanelTableCenteredContainer.classList);
    var submenuPanelTableCentered = submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");
    // alert(submenuPanelTableCentered.classList); 
    submenuPanelTableCentered.classList.remove("hide");
    submenuPanelTableCentered.classList.add("show");
    
}

