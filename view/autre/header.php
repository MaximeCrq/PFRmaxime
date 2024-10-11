<!DOCTYPE html>
<html lang="fr"> 
    <head> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/header.css">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/footer.css">
        <link rel="stylesheet" href="./css/index.css">
        <title>TouTouTrajet - Accueil</title>
        <?php echo "<script src='./script/{$script}.js' defer></script> " ; ?>
    </head>
    <body>
        <nav>
            <a href="../index.php" class="header-element" id="logo-toutoutrajet">
                <img src="../image/logo-toutoutrajet-2.png" alt="logo du site du projet">
            </a>
            <a href="../index.php" class="header-element" id="titre-toutoutrajet">
                <h1>TouTouTrajet</h1>
            </a>
            <ul class="header-element" id="liste-1">
                <li><a href="../index.php">ACCUEIL</a></li>
                <li><a href="./carte.php">CARTE</a></li>
                <li><a href="./conseil.php">CONSEIL</a></li>
                <li><a href="./photo.php">PHOTO</a></li>
            </ul>
            <div></div>
            <ul class="header-element" id="liste-2">
                <li><a href="./connexion.php">CONNEXION</a></li>
                <li><a href="./inscription.php">INSCRIPTION</a></li>
            </ul>
        </nav>