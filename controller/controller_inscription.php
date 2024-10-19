<?php 

class ControllerInscription {
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
                $user = new ManagerInscription($tab['login_user']);
                
                //Utilisation des Setter pour donner à mon objet le loginUser, mailUser et passwordUser
                $user->setLoginUser($tab['login_user'])->setMailUser($tab['mail_user'])->setPasswordUser($tab['password_user']);


                //Vérification du login est si diponible
                if(empty($user->readUserByLogin())){
                    //Si la réponse de la BDD est vide, alors le Login est disponible (car non trouvé en BDD), il est utilisable.
                    //Lancement de l'ajout de  l'utilisateur en BDD
                    $this->setMessage($user->addUser());

                }else{
                    //Si la réponse de la BDD n'est pas vide, alors ce login est trouvé en BDD, donc le login n'est pas disponible, et renvoie un message d'erreur
                    $this->setMessage("Ce Login existe déjà en BDD !");
                }
            }
        }
    }
}