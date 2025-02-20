<!DOCTYPE html>
<html lang="fr"> 
    <head> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/header.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/footer.css">
        <link rel="icon" type="image/png" href="./image/favicon.png">
        <title>TouTouTrajet - Accueil</title>
        <?php echo "<script src='./script/{$script}.js' defer></script> " ; ?>
        <?php echo "<script src='./script/headFoot.js' defer></script> " ; ?>
    </head>
    <body>
        <header id="header">
            <nav id="header_nav">
                <a href="/PFRmaxime/accueil" class="header-element" id="logo-toutoutrajet">
                    <img src="./image/logo-toutoutrajet-2.png" alt="logo du site du projet">
                </a>
                <a href="/PFRmaxime/accueil" class="header-element" id="titre-toutoutrajet">
                    <h1>TouTouTrajet</h1>
                </a>
                <ul class="header-element" id="liste-1">
                    <li><a href="/PFRmaxime/accueil">ACCUEIL</a></li>
                    <li><a href="/PFRmaxime/carte">CARTE</a></li>
                    <li><a href="/PFRmaxime/conseil">CONSEIL</a></li>
                    <li><a href="/PFRmaxime/photo">PHOTO</a></li>
                </ul>
                <div id="separator_nav"></div>
                <ul class="header-element" id="liste-2">
                <li><a href="/PFRmaxime/connexion" class="<?php echo $header->getButtonDeco() ?>">CONNEXION</a></li>
                    <li><a href="/PFRmaxime/inscription" class="<?php echo $header->getButtonDeco() ?>">INSCRIPTION</a></li>
                    <li><a href="/PFRmaxime/compte" class="<?php echo $header->getButtonCo() ?>">COMPTE</a></li>
                </ul>
            </nav>
            <img src="./image/menu-icon1.png" alt="icon d'ouverture du menu" id="menu-icon1">
            <img src="./image/menu-icon2.png" alt="icon de fermeture du menu" id="menu-icon2">
        </header>