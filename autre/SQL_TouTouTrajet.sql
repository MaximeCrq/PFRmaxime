/* creation de la base de donne */
CREATE DATABASE toutoutrajet;

/* utilisation de cette base */
USE toutoutrajet;

/* creation table(s) */
CREATE TABLE users (
	id_user INT PRIMARY KEY AUTO_INCREMENT, 
    login_user VARCHAR(20) NOT NULL,
    mail_user VARCHAR(50) NOT NULL,
    password_user VARCHAR(150) NOT NULL,
    ip_user VARCHAR(50),
    date_inscription_user DATETIME
);

CREATE TABLE bans (
	id_ban INT PRIMARY KEY AUTO_INCREMENT,
    date_start DATETIME,
    date_end DATETIME,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE photos (
	id_photo INT PRIMARY KEY AUTO_INCREMENT,
    name_photo VARCHAR(50),
    link_photo VARCHAR(50) NOT NULL,
    date_add_photo DATETIME,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE roles (
	id_role INT PRIMARY KEY AUTO_INCREMENT,
    name_role VARCHAR(20)
);

CREATE TABLE type_rides (
	id_type_ride INT PRIMARY KEY AUTO_INCREMENT,
    name_type_ride VARCHAR(20)
);

CREATE TABLE cities (
	id_city INT PRIMARY KEY AUTO_INCREMENT,
    name_city VARCHAR(50)
);

CREATE TABLE rides (
	id_ride INT PRIMARY KEY AUTO_INCREMENT,
    name_ride VARCHAR(50) NOT NULL,
    postal_adress_ride INT NOT NULL,
    adress_ride VARCHAR(50),
    elevation_ride INT,
    distance_ride INT,
    time_ride INT,
    link_form_ride VARCHAR(50),
    date_add_ride DATETIME,
    id_city INT,
    id_type_ride INT,
    FOREIGN KEY (id_city) REFERENCES cities(id_city),
    FOREIGN KEY (id_type_ride) REFERENCES type_rides(id_type_ride)
);

CREATE TABLE notes (
	id_note INT PRIMARY KEY AUTO_INCREMENT,
    value_note INT NOT NULL,
    id_ride INT,
    id_photo INT,
    id_user INT,
    FOREIGN KEY (id_ride) REFERENCES rides(id_ride),
    FOREIGN KEY (id_photo) REFERENCES photos(id_photo),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE new_rides (
	id_new_ride INT PRIMARY KEY AUTO_INCREMENT,
    name_new_ride VARCHAR(50) NOT NULL,
    postal_adress_ride INT NOT NULL,
    adress_ride VARCHAR(50),
    date_request_new_ride DATETIME,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

/* test */
INSERT INTO users (login_user, mail_user, password_user, ip_user, date_inscription_user) VALUES ('AzzOg33', 'geek-azzog@hotmail.com', 1234, '192.168.10.12',  NOW());