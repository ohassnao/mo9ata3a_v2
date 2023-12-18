package com.example.mo9ata3a_project.entities;

import jakarta.persistence.*;

@Entity
public class Demande_inscri extends Demande{


    @ManyToOne
    private Fonctionnaire_inscri fonc_inscri;
    private String nom;
    private String prenom;
    private String cin;
    private String adresse;
    private String username;

    private String email;

    private String password;


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public Fonctionnaire_inscri getFonc_inscri() {
        return fonc_inscri;
    }

    public void setFonc_inscri(Fonctionnaire_inscri fonc_inscri) {
        this.fonc_inscri = fonc_inscri;
    }

}
