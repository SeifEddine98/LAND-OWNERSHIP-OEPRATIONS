package ENTITIES;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reclamation implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.
	IDENTITY)
	private Long code;
	private Long numtel;
	private String type;
	private String description;
	private Long codeCitoyen;
	
	public Reclamation() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Reclamation(Long numtel, String type, String description, Long codeCitoyen) {
		super();
		this.numtel = numtel;
		this.type = type;
		this.description = description;
		this.codeCitoyen=codeCitoyen;
	}

	public Long getNumtel() {
		return numtel;
	}

	public void setNumtel(Long numtel) {
		this.numtel = numtel;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getCode() {
		return code;
	}

	public Long getCodeCitoyen() {
		return codeCitoyen;
	}

	public void setCodeCitoyen(Long codeCitoyen) {
		this.codeCitoyen = codeCitoyen;
	}
	
	
	
	
}
