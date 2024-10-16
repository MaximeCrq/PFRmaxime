<?php

class ManagerInscription extends ModelInscription{
    //METHODE relation BDD
    public function addUser(){
        //1 chemin de la bdd
        $bdd = new PDO('mysql:host=localhost;dbname=pfr','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //recuperation des attributs
        $login_user=$this->getLoginUser();
        $mail_user=$this->getMailUser();
        $password_user=$this->getPasswordUser();
        //recuperation de l'ip
        $ip=$this->getip();

        //Try...Catch...récupération des données
        try{
            //2 préparer ma requête INSERT INTO
            $req = $bdd->prepare('INSERT INTO users (login_user, mail_user, password_user, ip_user, date_inscription_user) VALUES (?,?,?,?,NOW())');

            //3 binding de Paramètre pour relier chaque ? à sa donnée
            $req->bindParam(1,$login_user,PDO::PARAM_STR);
            $req->bindParam(2,$mail_user,PDO::PARAM_STR);
            $req->bindParam(3,$password_user,PDO::PARAM_STR);
            $req->bindParam(4,$ip,PDO::PARAM_STR);

            //4 exécution de la requête
            $req->execute();

            //5 retourne un message de confirmation
            return "Bienvenue $login_user, chez TouToutrajet";
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }



    //Fonction pour récupérer un utilisateurs en BDD selon un login précis
    //Param : string
    //Return : array | string
    function readUserByLogin():array | string{
        //1Er Etape : Instancier l'objet de connexion PDO
        $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //Récupération du login depuis l'objet
        $login_user = $this->getLoginUser();

        //Try...Catch
        try{
            //2nd Etape : préparer ma requête SELECT
            $req = $bdd->prepare('SELECT id_user, name_user, first_name_user, login_user, mdp_user FROM users WHERE login_user = ?');

            //3Eme Etape : introduire le login de l'utilisateur dans ma requête avec du Binding de Paramètre
            $req->bindParam(1,$login_user,PDO::PARAM_STR);

            //4eme Etape : executer la requête
            $req->execute();

            //5eme Etape : Récupère les réponses de la BDD
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            //6eme Etape : je retourne mes $data
            return $data;
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }


    //Faire de même pour les adresses mail
    
}