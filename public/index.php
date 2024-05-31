<html lang="fr"> 

<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial scale=1.0"> 
    <link rel="stylesheet" href="./css/style.css">  
    <title>toutoutrajet</title> 
    <script src="./js/script.js"></script>
</head> 

<body>
    <header>
        <div class="logo">
            <input id="logo-accueil" type="image" src="./image/logo toutoutrajet 2.png" alt="Logo TouTouTrajet">
        </div>
        <div class="titre">
            <h1>TouTouTrajet</h1>
        </div>
        <div class="connect">
            <div class="inscription">
                <input id="btn-inscription" type="button" value="INSCRIPTION">
            </div>
            <div class="connexion">
                <input id="btn-connexion" type="button" value="CONNEXION">
            </div>
        </div>
    </header>

    <nav class="nav1">
        <div class="accueil">
            <input id="btn-accueil" type="button" value="ACCUEIL">
        </div>
        <div class="map">
            <input id="btn-carte" type="button" value="CARTE">
        </div>
        <div class="advice">
            <input id="btn-conseille" type="button" value="CONSEIL">
        </div>
        <div class="photo">
            <input id="btn-photo" type="button" value="PHOTO">
        </div>
        <div class="faq">
            <input id="btn-faq" type="button" value="FAQ">
        </div>
    </nav>
    
    <div class="first">
        <h2>"La carte des promenades"</h2>
    </div>

    <?php
        include("footer.html");
    ?>

    

    <script src="./js/script.js" defer></script>
</body>
</html>