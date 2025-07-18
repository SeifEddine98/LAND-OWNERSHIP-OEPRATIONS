package ENTITIES;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class CitoyenProfessionnel implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.
	IDENTITY)
	private Long code;
	@Column(unique=true)
	private Long cin;
	private String nom;
	private String prenom;
	private String email;
	private Long age;
	private Long numTel;
	@Column(unique=true)
	private String login;
	private String password;
	private Long carte;
	private Long solde;

		
	public CitoyenProfessionnel(Long cin, String nom, String prenom, String email, Long age, Long numTel, String login,
			String password, Long carte, Long solde) {
		super();
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.age = age;
		this.numTel = numTel;
		this.login = login;
		this.password = password;
		this.carte=carte;
		this.solde = solde;
	}

	public CitoyenProfessionnel ()
	{
		super();
	}

	public Long getCode() {
		return code;
	}

	public Long getCin() {
		return cin;
	}

	public void setCin(Long cin) {
		this.cin = cin;
	}

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getAge() {
		return age;
	}

	public void setAge(Long age) {
		this.age = age;
	}

	public Long getNumTel() {
		return numTel;
	}

	public void setNumTel(Long numTel) {
		this.numTel = numTel;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getCarte() {
		return carte;
	}

	public void setEtat_compte(Long carte) {
		this.carte = carte;
	}

	public Long getSolde() {
		return solde;
	}

	public void setSolde(Long solde) {
		this.solde = solde;
	}
	

}
	


