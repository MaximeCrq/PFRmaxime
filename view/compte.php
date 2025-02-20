        <main id="main_compte">
            <nav>
                <ul>
                    <li><a class="button" id="button_compte">Données du compte</a></li>
                    <li><a class="button" id="button_photo">Photo(s)</a></li>
                    <li><a class="button" id="button_site">Site(s) ajouté(s)</a></li>
                    <li><a class="button" id="button_modify">Modifier le compte</a></li>
                    <li><a class="button" id="button_deconnexion">Déconnexion</a></li>
                </ul>
            </nav>
            <div id="all_container">
                <div class="container" id="container1">
                    <h1>Données du compte</h1>
                    <ul>
                        <li>Login : </li>
                        <li><?php echo $moncompte->getLogin() ?></li>
                        <li>Adresse mail : </li>
                        <li><?php echo $moncompte->getMail() ?></li>
                    </ul>
                </div>
                <div class="container" id="container2">
                    <h1>Photo(s)</h1>
                </div>
                <div class="container" id="container3">
                    <h1>Site(s) ajouté(s)</h1>
                </div>
                <div class="container" id="container4">
                    <h1>Modifier le compte</h1>
                </div>
                <div class="container" id="container5">
                    <h3>Voulez-vous vraiment vous déconnecter ?</h3>
                    <ul>
                        <li><a href="/PFRmaxime/deconnexion">OUI</a></li>
                        <li><a href="/PFRmaxime/accueil">NON</a></li>
                    </ul>
                </div>
            </div>
        </main>