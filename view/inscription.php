<!DOCTYPE html>
<html lang="fr"> 
    <head> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/header.css">
        <link rel="stylesheet" href="../css/footer.css">
        <title>TouTouTrajet - Inscription</title>
    </head> 

    <body id="body-inscription">
        <header></header>

        <main id="inscription">
            <h1>INSCRIPTION</h1>
            <div id="contenair">
                <div>
                    <h3>Pseudo :</h3>
                    <input type="text" placeholder="SuperNaNi" id="inputPseudoInscription">
                </div>
                <div>
                    <h3>Adresse mail :</h3>
                    <input type="email" placeholder="azerty@gmail.com" id="inputEmailInscription">
                </div>
                <div>
                    <h3>Mot de passe :</h3>
                    <input type="password" placeholder="edar34polm-97" id="inputPasswordInscription">
                </div>
                <div>
                    <h3>Confirmation du Mot de passe :</h3>
                    <input type="password" placeholder="edar34polm-97" id="inputPasswordConfirmInscription">
                </div>
            </div>
            <button id="submitButtonInscription">CONFIRMATION</button>
            <article id="userMessageInscription">
                <h4>Condition du Mot de passe :</h4>
                <div id="listeConditionPassword">
                    <p>- minimum 6 caractères</p>
                    <p>- maximum 15 caractères</p>
                    <p>- minimum 1 chiffre</p>
                    <p>- minimum 1 caractère spécial (@,&,!,$,-)</p>
                    <p>- minimum une majuscule</p>
                    <p>- aucun espace</p>
                    <p>- trop simple</p>
                </div>
            </article>
        </main>

        <footer></footer>

        <script src="../script/headFoot.js"></script>
        <script src="../script/inscription.js"></script>
    </body>
</html>