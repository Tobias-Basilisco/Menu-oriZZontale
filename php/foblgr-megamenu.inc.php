<?php
$qryMMName = $dbLink -> query("SELECT * FROM pcap_mmenu_name WHERE id_lingua=".$id_lingua."");
$numMMName = $qryMMName -> num_rows;

if ($numMMName > 0) {
	$rowMMName = $qryMMName -> fetch_assoc();
	$idMMenu = $rowMMName['id'];
	$qryMM = $dbLink -> query("SELECT * FROM pcap_mmenu_voce WHERE id_mmenu=".$idMMenu." AND attivo = 1 ORDER BY ordine ASC");
	$numMM = $qryMM -> num_rows;
} else {
	$numMM=0;
}
//echo $num_link_mm."<BR>";

if ($numMMName > 0 && $numMM > 0) { ?>
	<link rel="stylesheet" type="text/css" media="all" href="/css/menu-orizzontale3.css" id="effect" />
	<figure id="hamburger">
					<img  src="img/hamburger.png" width="40px" height="40px" alt="hamburger">
				</figure>
	<nav class="container" id="menu-orizzontale">
		<ul class="menu">
			<?php
			
			$linkmmsing=""; $dptxt1=""; $dptxt2=""; $idSubMenu=0;
				
			while ($rowMM = $qryMM -> fetch_assoc()) {
				$idSubMenu++;
				if ($rowMM['link']=="" && $rowMM['rifmod']==0) {
					$linkmmsing="#";
				} else {
					if ($rowMM['link']<>"") {$linkmmsing = $rowMM['link'];}
					if ($rowMM['rifmod']>0) {
						$queryselpag=$dbLink->query("SELECT * FROM pcap_pagine WHERE id='".$rowMM['rifmod']."'");
						$rowselpag=$queryselpag->fetch_assoc();
						$linkmmsing = $rowselpag['url'];
					}
				}
				if ($rowMM['colonne']==0) { $dptxt1=""; $dptxt2=""; } else { $dptxt1=""; $dptxt2=""; }
				$modPanel = "";
				if ($rowMM['modello']==0) { $modPanel = "MMC"; }
				if ($rowMM['modello']==2) { $modPanel = "MNO"; }
			?>
			
			<li id="menu-<?php if ($rowMM['modello']==0) { echo "MMC-".$idSubMenu; } else { echo "MNO-".$idSubMenu; }?>" class="menu-item <?php echo $modPanel;?>">
				<div class="menu-item-content"> 
					<a href="<?php echo $dirbase.$linkmmsing;?>" title="<?php echo $rowMM['voce']?>">
						<?php if ($rowMM['icona']!="") { ?><img src="/img_up/big/<?php echo $rowMM['icona']?>" alt="<?php echo $rowMM['voce']?>" class="va-middle imgMMheight noImage"><?php } ?>
						<?php echo $rowMM['voce'];?> 
					</a>
					<?php if ($rowMM['modello']==0) { ?><div class="frecce-zone-a"><i class="fas fa-chevron-right frecce frecce-closed"></i></div><?php } ?>
				</div>


				<?php if ($rowMM['modello']==0) { 
					$datacol = 12/$rowMM['colonne']; ?>

					<div id="panel-table-centered-<?php echo $idSubMenu;?>-container" class="submenu-panel-table-centered-container ">
						<div class="submenu-panel-table-centered hide-fade">
							
							<?php for ($sezcolonne=1; $sezcolonne <= $rowMM['colonne']; $sezcolonne++) { ?>
								<div class="col-lg-<?php echo $datacol;?> col-md-<?php echo $datacol;?> col-sm-12 col-xs-12 link-list dispCol">
									<ul class="sub-submenu submenu-color ">
										<li class="sub-submenu-item">
											<?php $querycolonna=$dbLink->query("SELECT * FROM pcap_mmenu_voce_singola WHERE id_menu_voce=".$rowMM['id']." AND colonna=".$sezcolonne." AND attivo=1 ORDER BY ordine ASC");
											while ($rowcolonna=$querycolonna->fetch_assoc()) {

												if ($rowcolonna['modello']==1) { ?>
													<div class="menu-item-content"> <?php echo $rowcolonna['voce'];?> </div><?php
												}

												if ($rowcolonna['modello']==2 || $rowcolonna['modello']==4 || $rowcolonna['modello']==6) {
													$queryselpagriga=$dbLink->query("SELECT * FROM pcap_pagine WHERE id='".$rowcolonna['rifmod']."'");
													$rowselpagriga=$queryselpagriga->fetch_assoc();

													switch ($rowcolonna['tipovis']) {

														case 1: ?>
															<div class="menu-item-content">   
																<a href="<?php echo $dirbase.$rowselpagriga['url']?>" 
																	title="<?php echo $rowselpagriga['vocemenu']?>" 
																	<?php if ($rowcolonna['nofollow']==1) { echo " rel=\"nofollow\"";}?>
																	<?php if ($rowcolonna['target']!="") { echo " target=\"".$rowcolonna['target']."\"";}?> >
																	<?php echo $rowselpagriga['vocemenu']?>
																</a>
															</div><?php
														break;

														case 2: ?>
															<div class="menu-item-content">
																<?php echo $rowcolonna['voce']?><BR>
																<a href="<?php echo $rowselpagriga['url']?>" title="<?php echo $rowselpagriga['vocemenu']?>" <?php if ($rowcolonna['nofollow']==1) { echo " rel=\"nofollow\"";}?><?php if ($rowcolonna['target']!="") { echo " target=\"".$rowcolonna['target']."\"";}?>>
																	<img src="/img_up/prop/big/<?php echo $rowselpagriga['fotov']?>" class="img-responsive" alt="<?php echo $rowselpagriga['titolo']?>" >
																</a>
																<a href="<?php echo $dirbase.$rowselpagriga['url']?>" title="<?php echo $rowselpagriga['vocemenu']?>"
																	<?php if ($rowcolonna['nofollow']==1) { echo " rel=\"nofollow\"";}?>
																	<?php if ($rowcolonna['target']!="") { echo " target=\"".$rowcolonna['target']."\"";}?>>
																	<?php echo $rowselpagriga['titolo']?>
																</a>
															</div><?php
														break;

														case 3: ?>
															<div class="menu-item-content">
																<?php echo $rowcolonna['voce']?><BR>
																<div class="rwd-video"><?php
																	if ($rowselpagriga['youtube']!="") { ?>
																		<iframe width="560" height="315" src="//www.youtube.com/embed/<?php echo $rowselpagriga['youtube']?>" frameborder="0" allowfullscreen></iframe><?php
																	}
																	if ($rowselpagriga['vimeo']!="" && $rowselpagriga['youtube']=="") { ?>
																		<iframe width="560" height="315" src="https://www.youtube.com/embed/<?php echo $rowselpagriga['youtube']?>" frameborder="0" allowfullscreen></iframe>
																		<iframe src="//player.vimeo.com/video/<?php echo $rowselpagriga['vimeo']?>" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><?php
																	} ?>
																</div>
																<a href="<?php echo $dirbase.$rowselpagriga['url']?>" title="<?php echo $rowselpagriga['vocemenu']?>" <?php if ($rowcolonna['nofollow']==1) { echo " rel=\"nofollow\"";}?><?php if ($rowcolonna['target']!="") { echo " target=\"".$rowcolonna['target']."\"";}?>>
																	<?php echo $rowselpagriga['titolo']?>
																</a>
															</div><?php
														break;
							
														case 4: //Sezione Audio da completare ?>
															<div class="menu-item-content">
																<?php echo $rowcolonna['voce']?><BR>
																<a href="<?php echo $dirbase.$rowselpagriga['url']?>" title="<?php echo $rowselpagriga['vocemenu']?>" <?php if ($rowcolonna['nofollow']==1) { echo " rel=\"nofollow\"";}?><?php if ($rowcolonna['target']!="") { echo " target=\"".$rowcolonna['target']."\"";}?>>
																	<?php echo $rowselpagriga['titolo']?>
																</a>
															</div><?php
														break;
													}
												}

												if ($rowcolonna['modello']==3) {

													$queryselpagriga=$dbLink->query("SELECT * FROM pcap_pagine WHERE id='".$rowcolonna['rifmod']."'");
													$rowselpagriga=$queryselpagriga->fetch_assoc(); ?>
													<div class="menu-item-content">   
														<a href="<?php echo $dirbase.$rowselpagriga['url']?>" title="<?php echo $rowselpagriga['vocemenu']?>" >
															<?php echo $rowselpagriga['vocemenu']?>
														</a>
													</div> <?php
												}

												if ($rowcolonna['modello']==5) {
													$queryselpagriga=$dbLink->query("SELECT * FROM pcap_pagine WHERE id='".$rowcolonna['rifmod']."'");
													$rowselpagriga=$queryselpagriga->fetch_assoc(); ?>
													<div class="menu-item-content">   
														<a href="<?php echo $dirbase.$rowselpagriga['url']?>" title="<?php echo $rowselpagriga['vocemenu']?>" >
															<?php echo $rowselpagriga['vocemenu']?>
														</a>
														<div class="frecce-zone-a"><i class="fas fa-chevron-right frecce frecce-closed"></i></div>
													</div>
													<?php $querypage2 = $dbLink->query("SELECT * FROM pcap_pagine WHERE menu=0 AND page=".$rowselpagriga['id']." ORDER BY ordine ASC");
													$num_link_page2 = $querypage2->num_rows;
													if ($num_link_page2>0) { ?>
														<div class="sub-sub-submenu-panel">
															<ul class="sub-sub-submenu sub-submenu-color">
																<?php while ($rowpage2=$querypage2->fetch_assoc()){ ?>
																	<li class="sub-sub-submenu-item"><a href="<?php echo $dirbase.$rowpage2['url']?>" title="<?php echo $rowpage2['vocemenu']?>"><?php echo $rowpage2['vocemenu']?></a></li><?php
							 									} ?>
															</ul>    
                                        				</div><?php
						   							}
						 						}

												if ($rowcolonna['modello']==7) { ?>
													<div class="menu-item-content">   
														<a href="<?php echo $dirbase.$rowcolonna['link']?>" title="<?php echo $rowcolonna['voce']?>" <?php if ($rowcolonna['nofollow']==1) { echo " rel=\"nofollow\"";}?><?php if ($rowcolonna['target']!="") { echo " target=\"".$rowcolonna['target']."\"";}?>>
							   								<?php echo $rowcolonna['voce']?>
							 							</a>
                                        			</div><?php
						 						}

						 						if ($rowcolonna['modello']==8) { ?>
						   							<li class="divider"></li><?php
						 						}
					   						} ?>
										</li>
									</ul>
								</div>
							<?php } ?>
						</div>
					</div>
				<?php } ?>
				</li>
			<?php } ?>
		</ul>
	</nav>
 	<script src="/js/menu-orizzontale3.js"></script>
 <?php } ?>
