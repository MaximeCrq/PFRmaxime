<!DOCTYPE html>
<html lang="fr"> 
    <head> 
        <meta charset="UTF-8">
        <!--AFFICHAGE TELEPHONE-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/index.css">
        <title>TouTouTrajet - Accueil</title>
    </head> 

    <body>
        <header>
            <nav>
                <a href="./index.php" class="header-element" id="logo-toutoutrajet">
                    <img src="./image/logo-toutoutrajet-2.png" alt="logo du site du projet">
                </a>
                <a href="./index.php" class="header-element" id="titre-toutoutrajet">
                    <h1>TouTouTrajet</h1>
                </a>
                <ul class="header-element" id="liste-1">
                    <li><a href="./index.php" id="prout">ACCUEIL</a></li>
                    <li><a href="./view/carte.php">CARTE</a></li>
                    <li><a href="./view/conseil.php">CONSEIL</a></li>
                    <li><a href="./view/photo.php">PHOTO</a></li>
                </ul>
                <div></div>
                <ul class="header-element" id="liste-2">
                    <li><a href="./view/connexion.php">CONNEXION</a></li>
                    <li><a href="./view/inscription.php">INSCRIPTION</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section id="featured-images">
                
                <div class="carousel">
                  
                    <img src="./image/fleche.png" alt="boutton image precedente" class="carousel-button" id="prev-button">
                  
                    <div class="carousel-items">
                    
                        <article id="carousel-item-1">
                            <img src="./image/carousel/image1.jpg" alt="Description de l'image 1" class="carousel-image">
                            <h3 class="image-title">Titre1</h3>
                        </article>
                        
                        <article id="carousel-item-2">
                            <img src="./image/carousel/image2.jpg" alt="Description de l'image 2" class="carousel-image">
                            <h3 class="image-title">Titre2</h3>
                        </article>

                        <article id="carousel-item-3">
                            <img src="./image/carousel/image3.jpg" alt="Description de l'image 3" class="carousel-image">
                            <h3 class="image-title">Titre3</h3>
                        </article>

                        <article id="carousel-item-4">
                            <img src="./image/carousel/image4.jpg" alt="Description de l'image 4" class="carousel-image">
                            <h3 class="image-title">Titre4</h3>
                        </article>
                        
                        <article id="carousel-item-5">
                            <img src="./image/carousel/image5.jpg" alt="Description de l'image 5" class="carousel-image">
                            <h3 class="image-title">Titre5</h3>
                        </article>

                    </div>

                    <img src="./image/fleche.png" alt="boutton image suivante" class="carousel-button" id="next-button">

                </div>
                
                <div id="carousel-indicators"></div>

            </section>

            <div class="separator separator1"></div>

            <section class="welcome">
                <div class="presentation">
                    <p>
                        <strong style="font-size: calc(10px + 1vw);">Bienvenue</strong> sur notre site dédié aux passionnés de chiens et aux amoureux des promenades en plein air !
                    </p>
                    <p>
                        Nous avons créé cette plateforme pour vous offrir une ressource exhaustive et conviviale, spécialement conçue pour répondre à vos besoins en tant que propriétaire de chien.
                    </p>
                    <p>
                        Que vous soyez un maître expérimenté ou un nouveau venu dans le monde des animaux de compagnie, notre site est là pour vous fournir des informations précieuses et des conseils pratiques.
                    </p>
                    <p>
                        Vous y trouverez une multitude de ressources allant des lieux de promenade les plus populaires aux astuces pour garantir des sorties agréables et sécurisées pour vous et votre compagnon à quatre pattes.
                    </p>
                    <p>
                        Nous espérons que cette plateforme deviendra votre guide de confiance pour toutes vos aventures canines, enrichissant la vie de votre chien tout en vous offrant des moments de détente et de plaisir en pleine nature.
                    </p>
                    <p>
                        Rejoignez notre communauté et explorez un monde où chaque promenade devient une nouvelle aventure !
                    </p>
                </div>
            </section>

            <div class="separator"></div>

            <section class="welcome" id="welcome2">
                <div class="presentation">
                    <h2>Explorez les meilleurs lieux de promenade pour chiens</h2>
                    <p>
                        Notre site vous propose une carte interactive des meilleurs lieux de promenade pour chiens, soigneusement sélectionnés et évalués par notre communauté de passionnés.
                    </p>
                    <p>
                        Que vous recherchiez un parc tranquille, une plage accueillante ou une forêt mystérieuse, vous trouverez ici les meilleurs endroits pour des sorties inoubliables avec votre compagnon.
                    </p>
                    <p>
                        Chaque lieu est accompagné de photos inspirantes pour vous donner un avant-goût des aventures qui vous attendent. Notre section FAQ est là pour répondre à toutes vos questions, des plus courantes aux plus spécifiques, afin de vous aider à préparer vos sorties en toute sérénité.
                    </p>
                    <p>
                        De plus, nos conseils pratiques vous permettront de garantir des promenades sûres et agréables. En utilisant notre site, vous pourrez découvrir de nouveaux endroits magnifiques tout en bénéficiant des expériences et recommandations partagées par d'autres propriétaires de chiens.
                    </p>
                    <p>
                        Préparez-vous à explorer et à vivre des moments inoubliables en pleine nature avec votre fidèle ami !
                    </p>
                </div>
            </section>
        </main>

        <footer>
            <div class="footer-1">
                <ul>
                    <li><h4>TouTouTrajet</h4></li>
                    <li><img src="./image/logo-toutoutrajet-2.png" alt="logo du site du projet"></li>
                </ul>
                <ul>
                    <li><h4>Navigation</h4></li>
                    <li><a href="./index.php">Accueil</a></li>
                    <li><a href="./view/carte.php">Carte</a></li>
                    <li><a href="./view/conseil.php">Conseil</a></li>
                    <li><a href="./view/photo.php">Photo</a></li>
                </ul>
                <ul>
                    <li><a href="./view/contact.php">Nous contacter</a></li>
                    <li><a href="">Premier pas sur TouTouTrajet</a></li>
                </ul>
                <div class="liste-reseaux-sociaux">
                    <a href="https://www.instagram.com/" target="_blank"><img src="./image/logo-instagram.png" alt="lien vers le compte de TouTouTrajet sur Instagram"></a>
                    <a href="https://x.com/?lang=fr" target="_blank"><img src="./image/logo-twitter.webp" alt="lien vers le compte de TouTouTrajet Twitter"></a>
                    <a href="https://www.facebook.com/?locale=fr_FR" target="_blank"><img src="./image/logo-facebook.png" alt="lien vers le compte de TouTouTrajet Facebook"></a>
                </div>
            </div>
            <div class="footer-2">
                <ul>
                    <li>Copyright @ 2024-2025 - Tous droits réservés.</li>
                    <li>Mentions légales</li>
                    <li>CGV</li>
                </ul>
            </div>
        </footer>

        <script src="./script/index.js"></script>
    </body>
</html>