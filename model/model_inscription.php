<?php 
    

class ModelInscription {
    //ATTRIBUT
    private ?int $id_user;
    private ?string $login_user;
    private ?string $mail_user;
    private ?string $password_user;
    private ?string $ip_user;
    private ?int $date_inscription_user;

    //GETTER et SETTER
    public function getIdUser(): ?int {
            return $this->id_user;
    }
    public function setIdUser(?int $id_user): self {
            $this->id_user = $id_user;
            return $this;
    }
    public function getLoginUser(): ?string {
            return $this->login_user;
    }
    public function setLoginUser(?string $login_user): self {
            $this->login_user = $login_user;
            return $this;
    }
    public function getMailUser(): ?string {
            return $this->mail_user;
    }
    public function setMailUser(?string $mail_user): self {
            $this->mail_user = $mail_user;
            return $this;
    }
    public function getPasswordUser(): ?string {
            return $this->password_user;
    }
    public function setPasswordUser(?string $password_user): self {
            $this->password_user = $password_user;
            return $this;
    }
    public function getIpUser(): ?string {
            return $this->ip_user;
    }
    public function setIpUser(?string $ip_user): self {
            $this->ip_user = $ip_user;
            return $this;
    }
    public function getDateInscriptionUser(): ?int {
            return $this->date_inscription_user;
    }
    public function setDateInscriptionUser(?int $date_inscription_user): self {
            $this->date_inscription_user = $date_inscription_user;
            return $this;
    }

//CONSTRUCT (objet)
    public function __construct($login_user){
        $this->login_user=$login_user;
    }
}