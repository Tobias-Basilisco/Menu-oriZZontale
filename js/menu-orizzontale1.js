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

document.querySelector('with-table').addEventListener(evento, showSubmenuPanelTableCentered);


function showSubmenuPanelTableCentered(elementWithWith){
    var submenuPanelTableCentered = document.querySelector('.submenu-panel-table-centered');

    
}

