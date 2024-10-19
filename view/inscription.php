        <main id="inscription">
            <h1>INSCRIPTION</h1>
            <form action="" method="POST">
                <div id="contenair">
                    <div>
                        <h3>Pseudo :</h3>
                        <input type="text" name="login_user" placeholder="SuperNaNi" id="inputPseudoInscription">
                    </div>
                    <div>
                        <h3>Adresse mail :</h3>
                        <input type="email" name="mail_user" placeholder="azerty@gmail.com" id="inputEmailInscription">
                    </div>
                    <div>
                        <h3>Mot de passe :</h3>
                        <input type="password" name="password_user" placeholder="edar34polm-97" id="inputPasswordInscription">
                    </div>
                    <div>
                        <h3>Confirmation du Mot de passe :</h3>
                        <input type="password" placeholder="edar34polm-97" id="inputPasswordConfirmInscription">
                    </div>
                </div>
                <button id="submitButtonInscription" name="inscription" >CONFIRMATION</button>
            </form>

            <p><?php echo $controllerInscription->getMessage() ?></p>

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