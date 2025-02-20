<?php 

class ControllerUser {
    //Attribut
    private ?string $message;
    private ?string $messageCo;

    //Constructeur
    public function __construct(){
        $this->message = "";
        $this->messageCo = "";
    }

    //Getter + Setter
    public function getMessage(): ?string { return $this->message; }
    public function setMessage(?string $message): self { $this->message = $message; return $this; }

    public function getMessageCo(): ?string { return $this->messageCo; }
    public function setMessageCo(?string $messageCo): self { $this->messageCo = $messageCo; return $this; }


    //METHODES
    //Fonction pour tester les données du formulaire d'inscription
    //Param : void
    //Return : array['login_user' => string, 'mail_user' => string, 'password_user' => string, 'erreur' => string]
    public function dataTestInscription():array{
        //1 vérifie si les champs obligatoires sont vides
        if(empty($_POST["login_user"]) || empty($_POST['mail_user']) || empty($_POST["password_user"])){
            return ["login_user"=>'',"mail_user"=>'',"password_user"=>'',"erreur"=>'Veuillez remplir le Login, le mail ET le Mot de Passe !'];
        }

        //2 etape de sécurité : nettoyage
        $login_user = sanitize($_POST["login_user"]);
        $mail_user = sanitize($_POST["mail_user"]);
        $password_user = sanitize($_POST["password_user"]);

        //3 etape de sécurité : Vérifier que les données sont au bon format
        if(!filter_var($mail_user,FILTER_VALIDATE_EMAIL)){
            return ["login_user"=>'',"mail_user"=>'',"password_user"=>'',"erreur"=>'Mail pas au bon format !'];
        }

        //4 etape de sécurité : hasher le mot de passe
        $password_user = password_hash($password_user,PASSWORD_BCRYPT);

        return ["login_user"=>$login_user,"mail_user"=>$mail_user,"password_user"=>$password_user,"erreur"=>''];
    }

    //Fonction pour tester les données du formulaire de connexion
    //Param : void
    //Return : array['mailCo_user' => string, 'passwordCo_user' => string, 'erreur' => string]
    public function dataTestConnexion():array{
        //1er Etape de sécurité : vérifie si les champs obligatoires sont vides
        if(empty($_POST["mailCo_user"]) || empty($_POST["passwordCo_user"])){
            return ["mailCo_user"=>'',"passwordCo_user"=>'',"erreur"=>'Veuillez remplir le mail ET le Mot de Passe !'];
        }

        //2nd Etape de sécurité : nettoyage
        $mailCo_user = sanitize($_POST["mailCo_user"]);
        $passwordCo_user = sanitize($_POST["passwordCo_user"]);

        //3eme Etape de sécurité : Vérifier que les données sont au bon format
        if(!filter_var($mailCo_user,FILTER_VALIDATE_EMAIL)){
            return ["mailCo_user"=>'',"passwordCo_user"=>'',"erreur"=>'mail pas au bon format !'];
        }

        return ["mailCo_user"=>$mailCo_user,"passwordCo_user"=>$passwordCo_user,"erreur"=>''];
    }

    //Fonction qui vérifie la reception d'un formulaire d'inscription + lancer le processus d'inscription le cas échéant
    public function registerUser():void{
        //Tester si le formulaire d'inscription m'est envoyé
        if(isset($_POST["inscription"])){
            //Test de mes données
            $tab = $this->dataTestInscription();

            //Vérification du cas d'erreur
            if($tab['erreur'] != ''){
                $this->setMessage($tab['erreur']);
            }else{
                //Création de mon $user à partir de ManagerUser
                $user = new ManagerUser($tab['login_user']);
                
                //Utilisation des Setter pour donner à mon objet le loginUser, mailUser et passwordUser
                $user->setLoginUser($tab['login_user'])->setMailUser($tab['mail_user'])->setPasswordUser($tab['password_user']);


                //Vérification du login est si diponible
                if(empty($user->readUserByLogin())){
                    //Si la réponse de la BDD est vide, alors le Login est disponible (car non trouvé en BDD), il est utilisable.
                    //Lancement de la prochaine verification
                    if(empty($user->readUserByMail())){
                        //Si la réponse de la BDD est vide, alors le Mail est disponible (car non trouvé en BDD), il est utilisable.
                        //Lancement de l'ajout de  l'utilisateur en BDD
                        $this->setMessage($user->addUser());
    
                    }else{
                        //Si la réponse de la BDD n'est pas vide, alors ce mail est trouvé en BDD, donc le mail n'est pas disponible, et renvoie un message d'erreur
                        $this->setMessage("Ce Mail existe déjà en BDD !");
                    }

                }else{
                    //Si la réponse de la BDD n'est pas vide, alors ce login est trouvé en BDD, donc le login n'est pas disponible, et renvoie un message d'erreur
                    $this->setMessage("Ce Login existe déjà en BDD !");
                }
            }
        }
    }

        //Méthode qui teste la réception d'un formulaire de connexion, et qui lance le processus de connexion si c'est le cas
        public function logInUser():void{
            //Test si le formulaire de connexion m'est envoyé
            if(isset($_POST['connexion'])){
                //je teste les données de connexion envoyés
                $tab = $this->dataTestConnexion();
    
                //je regarde si je suis dans le cas d'erreur
                if($tab['erreur'] != ''){
                    //si c'est le cas : j'affiche l'erreur
                    $this->setMessageCo($tab['erreur']);
                }else{
                    //Si tout s'est bien passé :
                    //Création de mon objet $user à partir du ManagerUser
                    $user = new ManagerUser($tab['mailCo_user']);
    
                    //Interroger la BDD pour récupérer les données de l'utilisateurs à partir du mail entré
                    $data = $user->readUserByMail();
    
                    //Tester si je suis dans le cas d'erreur (problème de communication avec la BDD)
                    //Si c'est le cas, je reçois un string, si tout s'est passé je reçois un array
                    if(gettype($data) == 'string'){
                        $this->setMessageCo($data);
                    }else{
                        //Tout s'est bien passé
                        //Je vérifie la réponse de la BDD : vide ou pas ?
                        //Si c'est vide : alors le login n'existe pas en BDD, et j'affiche un message d'erreur
                        if(empty($data)){
                            $this->setMessageCo("Erreur dans le Mail et/ou du Mot de Passe !");
                        }else{
                            //Si on trouve le login en BDD
                            //Je vérifie la correspondance des mots de passe
                            if(!password_verify($tab['passwordCo_user'],$data[0]['password_user'])){
                                //Si les mots de passe ne correspondent pas, j'affiche un message d'erreur
                                $this->setMessageCo("Erreur dans le Mail et/ou du Mot de Passe !");
                            }else{
                                //Si les mots de passe correspondent, j'enregistre les données de l'utilisateur en SESSION, et j'affiche un message de confimation
                                $_SESSION['id_user'] = $data[0]['id_user'];
                                $_SESSION['mail_user'] = $data[0]['mail_user'];
                                $_SESSION['login_user'] = $data[0]['login_user'];
                                
                                $this->setMessageCo("{$_SESSION['login_user']} est connecté avec succés !");
                            }
                        }
                    }
                }
            }
        }
}