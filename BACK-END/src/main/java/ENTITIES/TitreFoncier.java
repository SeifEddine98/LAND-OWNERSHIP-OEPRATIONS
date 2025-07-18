package ENTITIES;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TitreFoncier implements Serializable {

	@Id
	private Long numtitre;
	private String gouv;
	private String type;
	private String description;
	private Long codeCitoyen;
	public TitreFoncier() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TitreFoncier(Long numtitre, String gouv, String type, String description, Long codeCitoyen) {
		super();
		this.numtitre = numtitre;
		this.gouv = gouv;
		this.type = type;
		this.description = description;
		this.codeCitoyen=codeCitoyen;
	}
	public Long getNumtitre() {
		return numtitre;
	}
	
	public String getGouv() {
		return gouv;
	}
	
	public String getType() {
		return type;
	}
	
	public String getDescription() {
		return description;
	}
	public Long getCodeCitoyen() {
		return codeCitoyen;
	}
	public void setCodeCitoyen(Long codeCitoyen) {
		this.codeCitoyen = codeCitoyen;
	}
	

	
}

