<?php
class ControlerHeader{
    //Attribut
    private ?string $buttonDeco;
    private ?string $buttonCo;

    //Constructeur
    public function __construct(){
        //Déclaration des variables d'affichages
        $this->buttonDeco = "";
        $this->buttonCo = "displayNone";
    }

    //Getter et Setter
    public function getButtonDeco(): ?string { return $this->buttonDeco; }
    public function setButtonDeco(?string $buttonDeco): self { $this->buttonDeco = $buttonDeco; return $this; }

    public function getButtonCo(): ?string { return $this->buttonCo; }
    public function setButtonCo(?string $buttonCo): self { $this->buttonCo = $buttonCo; return $this; }

    //Méthode pour afficher le menu de navigation selon si on est conecté ou pas
    public function displayNav():void{
        //Je vérifie si je suis connecté :
        if(isset($_SESSION['id_user'])){
            //Inversion des affichages
            $this->setButtonDeco("displayNone");
            $this->setButtonCo("");
        }
    }
}