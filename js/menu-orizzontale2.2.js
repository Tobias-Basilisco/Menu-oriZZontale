const screanWidthBreakpoint=1150;let timeOut=10;if(window.innerWidth>=screanWidthBreakpoint){moveDivsToEndOfNav();evento='mouseover'}else{let subSubSubmenuPanel=document.querySelectorAll(".sub-sub-submenu-panel");evento='click';timeOut=500;subSubSubmenuPanel.forEach(elemento=>{elemento.classList.add("hide-fade")})}function moveDivsToEndOfNav(){var submenuPanelTableCentered=document.querySelectorAll('.submenu-panel-table-centered-container');var nav=document.querySelector('header');for(let i=0;i<submenuPanelTableCentered.length;i++){nav.appendChild(submenuPanelTableCentered[i])}}document.getElementById('hamburger').addEventListener('click',manage_menu);function manage_menu(){let menu=document.getElementById('menu-orizzontale');let ham=document.getElementById('hamburger');var container=document.querySelector(".container");var documento=document.documentElement;if(!menu.classList.contains("show-menu")){menu.classList.remove("hide-menu");menu.classList.add("show-menu");vinculateArrows()}else{menu.classList.add("hide-menu");menu.classList.remove("show-menu");vinculateArrows()}if(menu.classList.contains("hide-menu")){ham.classList.remove("hide-menu");ham.classList.add("show-menu")}else{ham.classList.remove("show-menu");ham.classList.add("hide-menu")}setTimeout(()=>{if(!menu.classList.contains("hide-menu")){documento.addEventListener('click',function(event){var esDentroDelDiv=container.contains(event.target);var esDentroHam=ham.contains(event.target);if(!esDentroDelDiv&&!esDentroHam){menu.classList.remove("show-menu");setTimeout(()=>{menu.classList.add("hide-menu");ham.classList.remove("hide-menu")},timeOut);menu.classList.add("hide-menu");closeAll();vinculateArrows()}})}},timeOut)}var menuItem=document.querySelectorAll('.menu-item.megamenu');if(window.innerWidth>=screanWidthBreakpoint){menuItem.forEach(elemento=>{elemento.addEventListener(evento,()=>{showMegamenu4Livelli(elemento)})})}else if(window.innerWidth<screanWidthBreakpoint){menuItem.forEach(elemento=>{elemento.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showMegamenu4Livelli(elemento)})});vinculateArrows()}function showMegamenu4Livelli(targetElement){let submenuPanel=targetElement.querySelector(".submenu-panel");let allSubmenuPanels=document.querySelectorAll(".submenu-panel");let allSubmenuPanelsButThis=[];hideSubmenus(".submenu-panel-table-centered");hideSubmenus(".sub-submenu-tendina-panel");if(window.innerWidth<screanWidthBreakpoint){hideSubmenus(".sub-submenu-panel");hideSubmenus(".sub-sub-submenu-panel");hideSubmenus(".submenu-panel-table")}for(let i=0;i<allSubmenuPanels.length;i++){if(allSubmenuPanels[i]!==submenuPanel){allSubmenuPanelsButThis.push(allSubmenuPanels[i])}}if(submenuPanel.classList.contains("hide-fade")){submenuPanel.classList.remove("hide-fade");submenuPanel.classList.add("show-fade")}else if(submenuPanel.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let submenuPanel=targetElement.querySelector(".submenu-panel");submenuPanel.classList.remove("show-fade")},timeOut);submenuPanel.classList.add("hide-fade")}let submenu=submenuPanel.querySelector(".submenu");let alturaPanel=submenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubmenuPanelsButThis.length;i++){allSubmenuPanelsButThis[i].classList.add("hide-fade")}setTimeout(()=>{let submenuPanel=targetElement.querySelector(".submenu-panel");let allSubmenuPanels=document.querySelectorAll(".submenu-panel");let allSubmenuPanelsButThis=[];for(let i=0;i<allSubmenuPanels.length;i++){if(allSubmenuPanels[i]!==submenuPanel){allSubmenuPanelsButThis.push(allSubmenuPanels[i])}}for(var i=0;i<allSubmenuPanelsButThis.length;i++){allSubmenuPanelsButThis[i].classList.remove("show-fade")}},timeOut);vinculateArrows()}var submenuItem=document.querySelectorAll('.submenu-megamenu-4-livelli .submenu-item');if(window.innerWidth>=screanWidthBreakpoint){submenuItem.forEach(elemento=>{elemento.addEventListener(evento,()=>{showSubSubMegamenu4Livelli(elemento)})})}else if(window.innerWidth<screanWidthBreakpoint){submenuItem.forEach(elemento=>{if(elemento.querySelector(".frecce-zone-a")){elemento.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubSubMegamenu4Livelli(elemento,elemento.closest(".submenu-panel"))})}})}function showSubSubMegamenu4Livelli(targetElement,panel){let submenuPanelTable=targetElement.querySelector(".submenu-panel-table");let allSubmenuPanelTables=document.querySelectorAll(".submenu-panel-table");let allSubmenuPanelTablesButThis=[];hideSubmenus(".submenu-panel-table-centered");if(window.innerWidth<screanWidthBreakpoint){hideSubmenus(".sub-submenu-tendina-panel");hideSubmenus(".sub-submenu-panel");hideSubmenus(".sub-sub-submenu-panel")}for(let i=0;i<allSubmenuPanelTables.length;i++){if(allSubmenuPanelTables[i]!==submenuPanelTable){allSubmenuPanelTablesButThis.push(allSubmenuPanelTables[i])}}if(submenuPanelTable.classList.contains("hide-fade")){submenuPanelTable.classList.remove("hide-fade");submenuPanelTable.classList.add("show-fade")}else if(submenuPanelTable.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let submenuPanelTable=targetElement.querySelector(".submenu-panel-table");submenuPanelTable.classList.remove("show-fade");panel.classList.remove("full-height");let submenu=submenuPanelTable.closest(".submenu");let alturaPanel=submenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px")},timeOut);submenuPanelTable.classList.add("hide-fade")}let subSubmenu=submenuPanelTable.querySelector(".sub-submenu");let alturaPanel=subSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubmenuPanelTablesButThis.length;i++){allSubmenuPanelTablesButThis[i].classList.add("hide-fade")}setTimeout(()=>{let submenuPanelTable=targetElement.querySelector(".submenu-panel-table");let allSubmenuPanelTables=document.querySelectorAll(".submenu-panel-table");let allSubmenuPanelTablesButThis=[];for(let i=0;i<allSubmenuPanelTables.length;i++){if(allSubmenuPanelTables[i]!==submenuPanelTable){allSubmenuPanelTablesButThis.push(allSubmenuPanelTables[i])}}for(var i=0;i<allSubmenuPanelTablesButThis.length;i++){allSubmenuPanelTablesButThis[i].classList.remove("show-fade")}},timeOut);if(window.innerWidth<screanWidthBreakpoint&&!panel.classList.contains("full-height")){panel.classList.add("full-height")}vinculateArrows()}var subSubmenuItem=document.querySelectorAll('.submenu-megamenu-4-livelli .sub-submenu-item');if(window.innerWidth>=screanWidthBreakpoint){}else if(window.innerWidth<screanWidthBreakpoint){subSubmenuItem.forEach(elemento=>{if(elemento.querySelector(".frecce-zone-a")){elemento.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubSubSubMegamenu4Livelli(elemento,elemento.closest(".submenu-panel-table"))})}})}function showSubSubSubMegamenu4Livelli(targetElement,panel){let subSubSubmenuPanel=targetElement.querySelector(".sub-sub-submenu-panel");let allSubSubSubmenuPanels=document.querySelectorAll(".sub-sub-submenu-panel");let allSubSubSubmenuPanelsButThis=[];for(let i=0;i<allSubSubSubmenuPanels.length;i++){if(allSubSubSubmenuPanels[i]!==subSubSubmenuPanel){allSubSubSubmenuPanelsButThis.push(allSubSubSubmenuPanels[i])}}if(subSubSubmenuPanel.classList.contains("hide-fade")){subSubSubmenuPanel.classList.remove("hide-fade");subSubSubmenuPanel.classList.add("show-fade")}else if(subSubSubmenuPanel.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let subSubSubmenuPanel=targetElement.querySelector(".sub-sub-submenu-panel");subSubSubmenuPanel.classList.remove("show-fade");panel.classList.remove("full-height");let subSubmenu=subSubSubmenuPanel.closest(".sub-submenu");let alturaPanel=subSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px")},timeOut);subSubSubmenuPanel.classList.add("hide-fade")}let subSubSubmenu=subSubSubmenuPanel.querySelector(".sub-sub-submenu");let alturaPanel=subSubSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubSubSubmenuPanelsButThis.length;i++){allSubSubSubmenuPanelsButThis[i].classList.add("hide-fade")}setTimeout(()=>{let subSubSubmenuPanel=targetElement.querySelector(".sub-sub-submenu-panel");let allSubSubSubmenuPanels=document.querySelectorAll(".sub-sub-submenu-panel");let allSubSubSubmenuPanelsButThis=[];for(let i=0;i<allSubSubSubmenuPanels.length;i++){if(allSubSubSubmenuPanels[i]!==subSubSubmenuPanel){allSubSubSubmenuPanelsButThis.push(allSubSubSubmenuPanels[i])}}for(var i=0;i<allSubSubSubmenuPanelsButThis.length;i++){allSubSubSubmenuPanelsButThis[i].classList.remove("show-fade")}},timeOut);if(window.innerWidth<screanWidthBreakpoint&&!panel.classList.contains("full-height")){panel.classList.add("full-height")}vinculateArrows()}var menuItemTendina=document.querySelectorAll('.menu-item.tendina');if(window.innerWidth>=screanWidthBreakpoint){menuItemTendina.forEach(elemento=>{elemento.addEventListener(evento,()=>{showSubmenuTendina(elemento)})})}else if(window.innerWidth<screanWidthBreakpoint){menuItemTendina.forEach(elemento=>{elemento.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubmenuTendina(elemento)})});vinculateArrows()}function showSubmenuTendina(targetElement){let submenuPanel=targetElement.querySelector(".submenu-panel");let allSubmenuPanels=document.querySelectorAll(".submenu-panel");let allSubmenuPanelsButThis=[];hideSubmenus(".submenu-panel-table-centered");hideSubmenus(".submenu-panel-table");if(window.innerWidth<screanWidthBreakpoint){hideSubmenus(".sub-submenu-tendina-panel");hideSubmenus(".sub-submenu-panel");hideSubmenus(".sub-sub-submenu-panel")}for(let i=0;i<allSubmenuPanels.length;i++){if(allSubmenuPanels[i]!==submenuPanel){allSubmenuPanelsButThis.push(allSubmenuPanels[i])}}if(submenuPanel.classList.contains("hide-fade")){submenuPanel.classList.remove("hide-fade");submenuPanel.classList.add("show-fade")}else if(submenuPanel.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let submenuPanel=targetElement.querySelector(".submenu-panel");submenuPanel.classList.remove("show-fade")},timeOut);submenuPanel.classList.add("hide-fade")}let submenu=submenuPanel.querySelector(".submenu");let alturaPanel=submenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubmenuPanelsButThis.length;i++){allSubmenuPanelsButThis[i].classList.add("hide-fade")}setTimeout(()=>{let allSubmenuPanels=document.querySelectorAll(".submenu-panel");let allSubmenuPanelsButThis=[];let submenuPanel=targetElement.querySelector(".submenu-panel");for(let i=0;i<allSubmenuPanels.length;i++){if(allSubmenuPanels[i]!==submenuPanel){allSubmenuPanelsButThis.push(allSubmenuPanels[i])}}for(var i=0;i<allSubmenuPanelsButThis.length;i++){allSubmenuPanelsButThis[i].classList.remove("show-fade")}},timeOut);vinculateArrows()}var submenuItemTendina=document.querySelectorAll('.menu-item.tendina .submenu-item');if(window.innerWidth>=screanWidthBreakpoint){submenuItemTendina.forEach(elemento=>{elemento.addEventListener(evento,()=>{showSubSubmenuTendina(elemento)})})}else if(window.innerWidth<screanWidthBreakpoint){submenuItemTendina.forEach(elemento=>{if(elemento.querySelector(".frecce-zone-a")){elemento.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubSubmenuTendina(elemento,elemento.closest(".submenu-panel"))})}})}function showSubSubmenuTendina(targetElement,panel){let subSubmenuTendinaPanel=targetElement.querySelector(".sub-submenu-tendina-panel");let allSubSubmenuTendinaPanels=document.querySelectorAll(".sub-submenu-tendina-panel");let allSubSubmenuTendinaPanelsButThis=[];for(let i=0;i<allSubSubmenuTendinaPanels.length;i++){if(allSubSubmenuTendinaPanels[i]!==subSubmenuTendinaPanel){allSubSubmenuTendinaPanelsButThis.push(allSubSubmenuTendinaPanels[i])}}if(subSubmenuTendinaPanel.classList.contains("hide-fade")){subSubmenuTendinaPanel.classList.remove("hide-fade");subSubmenuTendinaPanel.classList.add("show-fade")}else if(subSubmenuTendinaPanel.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let subSubmenuTendinaPanel=targetElement.querySelector(".sub-submenu-tendina-panel");subSubmenuTendinaPanel.classList.remove("show-fade");panel.classList.remove("full-height");let submenu=subSubmenuTendinaPanel.closest(".submenu");let alturaPanel=submenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px")},timeOut);subSubmenuTendinaPanel.classList.add("hide-fade")}let subSubmenu=subSubmenuTendinaPanel.querySelector(".sub-submenu-tendina");let alturaPanel=subSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubSubmenuTendinaPanelsButThis.length;i++){allSubSubmenuTendinaPanelsButThis[i].classList.add("hide-fade")}setTimeout(()=>{let subSubmenuTendinaPanel=targetElement.querySelector(".sub-submenu-tendina-panel");let allSubSubmenuTendinaPanels=document.querySelectorAll(".sub-submenu-tendina-panel");let allSubSubmenuTendinaPanelsButThis=[];for(let i=0;i<allSubSubmenuTendinaPanels.length;i++){if(allSubSubmenuTendinaPanels[i]!==subSubmenuTendinaPanel){allSubSubmenuTendinaPanelsButThis.push(allSubSubmenuTendinaPanels[i])}}for(var i=0;i<allSubSubmenuTendinaPanelsButThis.length;i++){allSubSubmenuTendinaPanelsButThis[i].classList.remove("show-fade")}},timeOut);if(window.innerWidth<screanWidthBreakpoint&&!panel.classList.contains("full-height")){panel.classList.add("full-height")}vinculateArrows()}var element8WithHas=document.getElementById('menu-8');var element82WithHas=document.getElementById('menu-8-2');if(window.innerWidth>=screanWidthBreakpoint){element8WithHas.addEventListener(evento,()=>{showSubmenuPanelTableCentered("panel-table-centered-8-container")});element82WithHas.addEventListener(evento,()=>{showSubmenuPanelTableCentered("panel-table-centered-8-2-container")})}else if(window.innerWidth<screanWidthBreakpoint){element8WithHas.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubmenuPanelTableCentered("panel-table-centered-8-container",element8WithHas)});var element82WithHas=document.getElementById('menu-8-2');element82WithHas.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubmenuPanelTableCentered("panel-table-centered-8-2-container",element82WithHas)});vinculateArrows()}function showSubmenuPanelTableCentered(panelTable,elementWithHas){hideSubmenus(".submenu-panel");hideSubmenus(".sub-submenu-tendina-panel");hideSubmenus(".submenu-panel-table");if(window.innerWidth<screanWidthBreakpoint){hideSubmenus(".sub-submenu-panel");hideSubmenus(".sub-sub-submenu-panel")}var submenuPanelTableCenteredContainer=document.getElementById(panelTable);var submenuPanelTableCentered=submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");let allSubmenuPanelTableCentered=document.querySelectorAll(".submenu-panel-table-centered");let allSubmenuPanelTableCenteredButThis=[];for(let i=0;i<allSubmenuPanelTableCentered.length;i++){if(allSubmenuPanelTableCentered[i]!==submenuPanelTableCentered){allSubmenuPanelTableCenteredButThis.push(allSubmenuPanelTableCentered[i])}}if(submenuPanelTableCentered.classList.contains("hide-fade")){submenuPanelTableCentered.classList.remove("hide-fade");submenuPanelTableCentered.classList.add("show-fade")}else if(submenuPanelTableCentered.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{var submenuPanelTableCenteredContainer=document.getElementById(panelTable);var submenuPanelTableCentered=submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");submenuPanelTableCentered.classList.remove("show-fade")},timeOut);submenuPanelTableCentered.classList.add("hide-fade")}let subSubmenu=submenuPanelTableCentered.querySelector(".sub-submenu");let alturaPanel=subSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubmenuPanelTableCenteredButThis.length;i++){allSubmenuPanelTableCenteredButThis[i].classList.add("hide-fade");setTimeout(()=>{var submenuPanelTableCenteredContainer=document.getElementById(panelTable);var submenuPanelTableCentered=submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");let allSubmenuPanelsButThis=[];for(let i=0;i<allSubmenuPanelTableCentered.length;i++){if(allSubmenuPanelTableCentered[i]!==submenuPanelTableCentered){allSubmenuPanelTableCenteredButThis.push(allSubmenuPanelTableCentered[i])}}allSubmenuPanelTableCenteredButThis[i].classList.remove("show-fade")},timeOut);vinculateArrowsTableCentered(panelTable,elementWithHas)}vinculateArrowsTableCentered(panelTable,elementWithHas)}var itemClicked=document.querySelectorAll('.submenu-panel-table-centered-container .sub-submenu-item')if(window.innerWidth>=screanWidthBreakpoint){}else if(window.innerWidth<screanWidthBreakpoint){itemClicked.forEach(elemento=>{if(elemento.querySelector(".frecce-zone-a")){elemento.querySelector(".frecce-zone-a").addEventListener(evento,()=>{showSubSubmenuCentered(elemento,elemento.closest(".submenu-panel-table-centered"))})}})}function showSubSubmenuCentered(targetElement,panel){let subSubSubmenuPanel=targetElement.querySelector(".sub-sub-submenu-panel");let allSubSubSubmenuPanels=document.querySelectorAll(".sub-sub-submenu-panel");let allSubSubSubmenuPanelsButThis=[];for(let i=0;i<allSubSubSubmenuPanels.length;i++){if(allSubSubSubmenuPanels[i]!==subSubSubmenuPanel){allSubSubSubmenuPanelsButThis.push(allSubSubSubmenuPanels[i])}}if(subSubSubmenuPanel.classList.contains("hide-fade")){subSubSubmenuPanel.classList.remove("hide-fade");subSubSubmenuPanel.classList.add("show-fade")}else if(subSubSubmenuPanel.classList.contains("show-fade")&&window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let subSubSubmenuPanel=targetElement.querySelector(".sub-sub-submenu-panel");subSubSubmenuPanel.classList.remove("show-fade");panel.classList.remove("full-height");let subSubmenu=subSubSubmenuPanel.closest(".sub-submenu");let alturaPanel=subSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px")},timeOut);subSubSubmenuPanel.classList.add("hide-fade")}let subSubSubmenu=subSubSubmenuPanel.querySelector(".sub-sub-submenu");let alturaPanel=subSubSubmenu.offsetHeight;document.documentElement.style.setProperty('--altura-panel',alturaPanel+"px");for(var i=0;i<allSubSubSubmenuPanelsButThis.length;i++){allSubSubSubmenuPanelsButThis[i].classList.add("hide-fade")}setTimeout(()=>{let subSubSubmenuPanel=targetElement.querySelector(".sub-sub-submenu-panel");let allSubSubSubmenuPanels=document.querySelectorAll(".sub-sub-submenu-panel");let allSubSubSubmenuPanelsButThis=[];for(let i=0;i<allSubSubSubmenuPanels.length;i++){if(allSubSubSubmenuPanels[i]!==subSubSubmenuPanel){allSubSubSubmenuPanelsButThis.push(allSubSubSubmenuPanels[i])}}for(var i=0;i<allSubSubSubmenuPanelsButThis.length;i++){allSubSubSubmenuPanelsButThis[i].classList.remove("show-fade")}},timeOut);if(window.innerWidth<screanWidthBreakpoint&&!panel.classList.contains("full-height")){panel.classList.add("full-height")}vinculateArrows()}var buttonCloseSubmenus=document.getElementById('close-submenus');buttonCloseSubmenus.addEventListener("click",()=>{hideSubmenus(".submenu-panel");hideSubmenus(".submenu-panel-table-centered")});function hideSubmenus(classQuerySubmenuPanel){let allSubmenuPanels=document.querySelectorAll(classQuerySubmenuPanel);let allFullheight=document.querySelectorAll(".full-height");for(var i=0;i<allSubmenuPanels.length;i++){allSubmenuPanels[i].classList.add("hide-fade");setTimeout(()=>{allSubmenuPanels=document.querySelectorAll(classQuerySubmenuPanel);for(var i=0;i<allSubmenuPanels.length;i++){allSubmenuPanels[i].classList.remove("show-fade")}},timeOut)}allFullheight.forEach(elemento=>{elemento.classList.remove("full-height")})}var buttonCloseSubSubmenus=document.getElementById('close-sub-submenus');buttonCloseSubSubmenus.addEventListener("click",()=>{hideSubmenus(".sub-submenu-tendina-panel");hideSubmenus(".submenu-panel-table");hideSubmenus(".sub-submenu-panel")});closeAll();function closeAll(){let menu=document.getElementById('menu-orizzontale');let ham=document.getElementById('hamburger');var container=document.querySelector(".container");var documento=document.documentElement;setTimeout(()=>{if(!menu.classList.contains("hide-fade")){documento.addEventListener('click',function(event){var esDentroDelDiv=container.contains(event.target);var esDentroHam=ham.contains(event.target);if(!esDentroDelDiv&&!esDentroHam){hideSubmenus(".submenu-panel");hideSubmenus(".submenu-panel-table-centered");hideSubmenus(".sub-submenu-tendina-panel");hideSubmenus(".submenu-panel-table");hideSubmenus(".sub-submenu-panel");if(window.innerWidth<screanWidthBreakpoint){hideSubmenus(".sub-sub-submenu-panel")}vinculateArrows()}})}},timeOut)}function vinculateArrows(){if(window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let arrowAll=document.querySelectorAll(".frecce");var liElement=[];for(var i=0;i<arrowAll.length;i++){liElement[i]=arrowAll[i].closest('li')}for(var i=0;i<arrowAll.length;i++){if(arrowAll[i].classList.contains("frecce-opened")){arrowAll[i].classList.remove("frecce-opened");arrowAll[i].classList.add("frecce-closed")}for(var c=0;c<4;c++){if(liElement[i].getElementsByTagName("div")[c]){if(liElement[i].getElementsByTagName("div")[c].classList.contains("show-fade")){arrowAll[i].classList.remove("frecce-closed");arrowAll[i].classList.add("frecce-opened")}}}}},timeOut)}}function vinculateArrowsTableCentered(panelTable,elementWithHas){if(window.innerWidth<screanWidthBreakpoint){setTimeout(()=>{let arrowAll=document.querySelectorAll(".frecce");var submenuPanelTableCenteredContainer=document.getElementById(panelTable);var submenuPanelTableCentered=submenuPanelTableCenteredContainer.querySelector(".submenu-panel-table-centered");for(var i=0;i<arrowAll.length;i++){if(arrowAll[i].classList.contains("frecce-opened")){arrowAll[i].classList.remove("frecce-opened");arrowAll[i].classList.add("frecce-closed")}if(submenuPanelTableCentered.classList.contains("show-fade")){elementWithHas.querySelector(".frecce").classList.remove("frecce-closed");elementWithHas.querySelector(".frecce").classList.add("frecce-opened")}}},timeOut)}}