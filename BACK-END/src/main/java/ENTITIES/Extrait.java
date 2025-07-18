package ENTITIES;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Extrait implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.
	IDENTITY)
	private Long code;
	private Long numtitre;
	private String gouv;
	private Date datecn;
	private Long numdema;
	private String deposant;
	private String typop;
	private String resultat;
	
	public Extrait() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Extrait(Long numtitre, String gouv, Date datecn, Long numdema, String deposant, String typop,
			String resultat) {
		super();
		this.numtitre = numtitre;
		this.gouv = gouv;
		this.datecn = datecn;
		this.numdema = numdema;
		this.deposant = deposant;
		this.typop = typop;
		this.resultat = resultat;
	}

	public Long getCode() {
		return code;
	}

	public Long getNumtitre() {
		return numtitre;
	}

	public String getGouv() {
		return gouv;
	}

	public Date getDatecn() {
		return datecn;
	}

	public Long getNumdema() {
		return numdema;
	}

	public String getDeposant() {
		return deposant;
	}

	public String getTypop() {
		return typop;
	}

	public String getResultat() {
		return resultat;
	} 

	
}

