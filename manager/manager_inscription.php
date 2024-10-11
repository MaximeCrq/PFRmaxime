<?php

class ManagerInscription{
    //METHODE relation BDD
    public function addUser(){
        //chemin de la bdd
        $bdd = new PDO('mysql:host=localhost;dbname=pfr','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //recuperation des attributs
        $id_user=$this->getIdUser();
    }
}