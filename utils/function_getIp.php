<?php
    //récupération d'ip, 'REMOTE_ADDR' normalement suffit, mais si l'utilisateur utilise un proxy on doit utiliser les 2 suivantes:
    function getIp(){
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
                $ip = $_SERVER['HTTP_CLIENT_IP'];
        }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
                $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }