<?php

class ControlerCompte{
    //Attributs
    private ?string $login;
    private ?string $mail;
    private ?string $password;

    //Constructeur
    public function __construct(){
        //Déclaration des variables d'affichage
        $this->login = "";
        $this->mail = "";
        $this->password = "";
    }

    //GETTER ET SETTER
    public function getLogin(): ?string { return $this->login; }
    public function setLogin(?string $login): self { $this->login = $login; return $this; }

    public function getMail(): ?string { return $this->mail; }
    public function setMail(?string $mail): self { $this->mail = $mail; return $this; }

    public function getPassword(): ?string { return $this->password; }
    public function setPassword(?string $password): self { $this->password = $password; return $this; }

    //METHOD
    // public function displayUserPassword() {
    //     $user = new ManagerUser($_SESSION['mail_user']);
    //     $data = $user->readUserByMail();
    //     $password = $data[0]['password_user'];
    //     return $this->setPassword($password);
    // }
    public function displayUserAccount(){
        //AFFICHER LES DONNES DE L'UTILISATEURS  ENREGISTREES EN SESSION
        //1er Etape : je teste si j'ai bien des SESSIONS d'enregistré
        if(isset($_SESSION['id_user'])){
            //2nd Etape : je transmets les données de SESSIONS à mes variables d'affichages
            $this->setLogin($_SESSION['login_user']);
            $this->setMail($_SESSION['mail_user']);
        }
    }
}