const screanWidthBreakpoint = 1000;

if (window.innerWidth >= screanWidthBreakpoint) {
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

  if (window.innerWidth >= screanWidthBreakpoint) {


    // alert("function show");
    var submenuPanelTableCenteredContainer = document.getElementById(panelTable);
    var submenuPanelTableCentered = submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");

    if (submenuPanelTableCentered.classList.contains("hide-fade")){

      submenuPanelTableCentered.classList.remove("hide-fade");
      submenuPanelTableCentered.classList.add("show-fade");
    }


    //esto despues se cambia por click fuera o mouseover otro elemento

    else if (submenuPanelTableCentered.classList.contains("show-fade")){

      setTimeout(() => {
        var submenuPanelTableCenteredContainer = document.getElementById(panelTable);
        var submenuPanelTableCentered = submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");
          
        submenuPanelTableCentered.classList.remove("show-fade");
      }
      ,1000);
      submenuPanelTableCentered.classList.add("hide-fade");
    }
  }    
}

