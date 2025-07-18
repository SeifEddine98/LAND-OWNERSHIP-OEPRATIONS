package ENTITIES;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Carte implements Serializable {
	@Id
	private Long numCarte;
	private Long codeDab;
	private Long codeInternet;
	private Long montant;
	
	public Carte() {
		super();
	}

	
	public Carte(Long numCarte, Long codeDab, Long codeInternet, Long montant) {
		super();
		this.numCarte = numCarte;
		this.codeDab = codeDab;
		this.codeInternet = codeInternet;
		this.montant = montant;
	}


	public Long getNumCarte() {
		return numCarte;
	}


	public Long getCodeDab() {
		return codeDab;
	}

	public Long getCodeInternet() {
		return codeInternet;
	}

	public Long getMontant() {
		return montant;
	}

	public void setMontant(Long montant) {
		this.montant = montant;
	}
	
	
	
}
