        <main id="connexion">
            <h1>CONNEXION</h1>
            <form action="" method="POST">
                <div id="contenair1">
                    <div>
                        <h3>Adresse mail :</h3>
                        <input type="email" name="mailCo_user" placeholder="azerty@gmail.com" id="inputEmailConnexion">
                    </div>
                    <div>
                        <h3>Mot de passe :</h3>
                        <input type="password" name="passwordCo_user" placeholder="edar34polm-97" id="inputPasswordConnexion">
                    </div>
                </div>
                <button id="submitButtonConnexion" name="connexion">CONFIRMATION</button>
            </form>

            <p><?php echo $controllerConnexion->getMessageCo() ?></p>
        </main>