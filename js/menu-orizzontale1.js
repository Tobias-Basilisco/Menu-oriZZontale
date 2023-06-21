const screanWidthBreakpoint = 1000;

if (window.innerWidth >= screanWidthBreakpoint) {
    moveDivsToEndOfNav();
  
     //MOUSEOVER VS CLICK
      evento='mouseover';
}
  
else {
  evento='click';
}

//BORRAR ESTO
  evento ='click';

//   SPOSTARE SOTTOMENU SOTTO

function moveDivsToEndOfNav(){

    var submenuPanelTableCentered = document.querySelector('.submenu-panel-table-centered-container');
    var nav = document.querySelector('header');
    nav.appendChild(submenuPanelTableCentered);
}







// SHOW/HIDE TABLE CENTERED

var element8WithHas = document.getElementById('menu-8');
element8WithHas.addEventListener(evento, () => {
  // Ejecutar la función y pasar el elemento clicado como argumento
  showSubmenuPanelTableCentered("panel-table-centered-8-container");
});

function showSubmenuPanelTableCentered(panelTable){

  if (window.innerWidth >= screanWidthBreakpoint) {
    hideSubmenus(".submenu-panel");

    
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
      ,500);
      submenuPanelTableCentered.classList.add("hide-fade");
    }
  }    
}


// SHOW / HIDE SOTTOMENU MEGAMENU 4 LIVELLI

 
// Seleccionar todos los elementos con la clase deseada


var menuItem = document.querySelectorAll('.menu-item.megamenu');

// Iterar sobre los elementos y agregar el event listener
menuItem.forEach(elemento => {
  elemento.addEventListener(evento, () => {
    // Ejecutar la función y pasar el elemento clicado como argumento
    showMegamenu4Livelli(elemento);
  });
});


function showMegamenu4Livelli (targetElement){
  let submenuPanel = targetElement.querySelector(".submenu-panel");
  let allSubmenuPanels = document.querySelectorAll(".submenu-panel");
  let allSubmenuPanelsButThis = [];

  hideSubmenus(".submenu-panel-table-centered");

  for (let i = 0; i < allSubmenuPanels.length; i++) {
    if (allSubmenuPanels[i] !== submenuPanel) {
      allSubmenuPanelsButThis.push(allSubmenuPanels[i]);
    }
  }


  if (submenuPanel.classList.contains("hide-fade")){

    submenuPanel.classList.remove("hide-fade");
    submenuPanel.classList.add("show-fade");
  }

  //esto despues se cambia por click fuera o mouseover otro elemento

  else if (submenuPanel.classList.contains("show-fade")){

    setTimeout(() => {
      let submenuPanel = targetElement.querySelector(".submenu-panel");
        
      submenuPanel.classList.remove("show-fade");
    }
    ,500);
    submenuPanel.classList.add("hide-fade");
  }
  
  for (var i = 0; i < allSubmenuPanelsButThis.length; i++) {

    allSubmenuPanelsButThis[i].classList.add("hide-fade");
    setTimeout(() => {
      let allSubmenuPanels = document.querySelectorAll(".submenu-panel");
      let allSubmenuPanelsButThis = [];
    
      for (let i = 0; i < allSubmenuPanels.length; i++) {
        if (allSubmenuPanels[i] !== submenuPanel) {
          allSubmenuPanelsButThis.push(allSubmenuPanels[i]);
        }
      }      

      allSubmenuPanelsButThis[i].classList.remove("show-fade");
      }
    ,500);
    
    // vinculateArrows();
  }
  



}

// SHOW / HIDE SOTTO SOTTO MENU MEGAMENU 4 LIVELLI

var submenuItem = document.querySelectorAll('.submenu-megamenu-4-livelli .submenu-item');

// Iterar sobre los elementos y agregar el event listener
submenuItem.forEach(elemento => {
  elemento.addEventListener("mouseover", () => {
    // Ejecutar la función y pasar el elemento clicado como argumento
    showSubSubMegamenu4Livelli(elemento);
  });
});

function showSubSubMegamenu4Livelli(targetElement) {
  let submenuPanelTable = targetElement.querySelector(".submenu-panel-table");

  if (submenuPanelTable.classList.contains("hide-fade")){

    submenuPanelTable.classList.remove("hide-fade");
    submenuPanelTable.classList.add("show-fade");
  }

  else if (submenuPanelTable.classList.contains("show-fade")){

    setTimeout(() => {
      let submenuPanelTable = targetElement.querySelector(".submenu-panel-table");
        
      submenuPanelTable.classList.remove("show-fade");
    }
    ,500);
    submenuPanelTable.classList.add("hide-fade");
  }

}

// SHOW / HIDE SOTTO MENU TENDINA


var menuItemTendina = document.querySelectorAll('.menu-item.tendina');

// Iterar sobre los elementos y agregar el event listener
menuItemTendina.forEach(elemento => {
  elemento.addEventListener(evento, () => {
    // Ejecutar la función y pasar el elemento clicado como argumento
    showSubmenuTendina(elemento);
  });
});

function showSubmenuTendina(targetElement){
  // alert("function");
  let submenuPanel = targetElement.querySelector(".submenu-panel");
  let allSubmenuPanels = document.querySelectorAll(".submenu-panel");
  let allSubmenuPanelsButThis = [];

  hideSubmenus(".submenu-panel-table-centered");

  for (let i = 0; i < allSubmenuPanels.length; i++) {
    if (allSubmenuPanels[i] !== submenuPanel) {
      allSubmenuPanelsButThis.push(allSubmenuPanels[i]);
    }
  }


  if (submenuPanel.classList.contains("hide-fade")){

    submenuPanel.classList.remove("hide-fade");
    submenuPanel.classList.add("show-fade");
  }

  //esto despues se cambia por click fuera o mouseover otro elemento

  else if (submenuPanel.classList.contains("show-fade")){

    setTimeout(() => {
      let submenuPanel = targetElement.querySelector(".submenu-panel");
        
      submenuPanel.classList.remove("show-fade");
    }
    ,500);
    submenuPanel.classList.add("hide-fade");
  }
  
  for (var i = 0; i < allSubmenuPanelsButThis.length; i++) {

    allSubmenuPanelsButThis[i].classList.add("hide-fade");
    setTimeout(() => {
      let allSubmenuPanels = document.querySelectorAll(".submenu-panel");
      let allSubmenuPanelsButThis = [];
    
      for (let i = 0; i < allSubmenuPanels.length; i++) {
        if (allSubmenuPanels[i] !== submenuPanel) {
          allSubmenuPanelsButThis.push(allSubmenuPanels[i]);
        }
      }      

      allSubmenuPanelsButThis[i].classList.remove("show-fade");
      }
    ,500);
    
    // vinculateArrows();
  }
  

}

// SHOW / HIDE SOTTO SOTTO MENU TENDINA

var submenuItemTendina = document.querySelectorAll('.menu-item.tendina .submenu-item');
// alert(submenuItemTendina[0]);

// Iterar sobre los elementos y agregar el event listener
submenuItemTendina.forEach(elemento => {
  elemento.addEventListener("mouseover", () => {
    // Ejecutar la función y pasar el elemento clicado como argumento
    showSubSubmenuTendina(elemento);
  });
});

function showSubSubmenuTendina(targetElement){
  // alert("function");

let subSubmenuTendinaPanel = targetElement.querySelector(".sub-submenu-tendina-panel");

  if (subSubmenuTendinaPanel.classList.contains("hide-fade")){

    subSubmenuTendinaPanel.classList.remove("hide-fade");
    subSubmenuTendinaPanel.classList.add("show-fade");
  }

  else if (subSubmenuTendinaPanel.classList.contains("show-fade")){

    setTimeout(() => {
      let subSubmenuTendinaPanel = targetElement.querySelector(".sub-submenu-tendina-panel");
        
      subSubmenuTendinaPanel.classList.remove("show-fade");
    }
    ,500);
    subSubmenuTendinaPanel.classList.add("hide-fade");
  }
}



//HIDE SUBMENUS

var buttonCloseSubmenus = document.getElementById('close-submenus');
buttonCloseSubmenus.addEventListener("click", () => {

  hideSubmenus(".submenu-panel");
  hideSubmenus(".submenu-panel-table-centered");
});

function hideSubmenus(classQuerySubmenuPanel){

  let allSubmenuPanels = document.querySelectorAll(classQuerySubmenuPanel);

  for (var i = 0; i < allSubmenuPanels.length; i++) {
    allSubmenuPanels[i].classList.add("hide-fade");
    setTimeout(() => {
      allSubmenuPanels = document.querySelectorAll(classQuerySubmenuPanel);
      for (var i = 0; i < allSubmenuPanels.length; i++) {
        allSubmenuPanels[i].classList.remove("show-fade");
      }
    },500);
  }
}

//HIDE SUBSUBMENUS

var buttonCloseSubSubmenus = document.getElementById('close-sub-submenus');
buttonCloseSubSubmenus.addEventListener("click", () => {

  hideSubmenus(".sub-submenu-tendina-panel");
  hideSubmenus(".submenu-panel-table");
});






// APRI/CHIUDI MENU

closeAll();

function closeAll(){

  let menu = document.getElementById('apriMenu');
  let ham = document.getElementById('hamburger');
  var container = document.querySelector(".container");
  var documento = document.documentElement;


  setTimeout(() => {
    if(!menu.classList.contains("hide-fade")){
    
      documento.addEventListener('click', function(event) {

        var esDentroDelDiv = container.contains(event.target);
        var esDentroHam = ham.contains(event.target);

        if (!esDentroDelDiv && !esDentroHam) {
          
          hideSubmenus(".submenu-panel");
          hideSubmenus(".submenu-panel-table-centered");
        

          hideSubmenus(".sub-submenu-tendina-panel");
          hideSubmenus(".submenu-panel-table");
                  // vinculateArrows();
        }
      })
    };
  }, 1000);
}

