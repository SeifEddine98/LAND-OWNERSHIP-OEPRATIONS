package CONTROLLERS;

import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ENTITIES.Administrateur;
import ENTITIES.CitoyenProfessionnel;
import ENTITIES.CitoyenSimple;
import METIER.Iadministrateur;

@RestController
@RequestMapping("/Admin")
@CrossOrigin(origins ="http://localhost:8100")

public class AdministrateurController {
	@Autowired
	private final Iadministrateur IA;

	public AdministrateurController(Iadministrateur ia) {
		super();
		IA = ia;
	}
	
	@PostMapping("/newAdmin")
	public ResponseEntity<Administrateur> addAdmin(@Valid @RequestBody Administrateur admin) throws URISyntaxException {
		return IA.addAdmin(admin);
	}
	@PostMapping("/AuthenAdmin")
	public int AuthentAdmin(@Valid @RequestBody Administrateur admin)  {
		return IA.AuthentAdmin(admin);
	}
	
	@PutMapping("/updateAdmin/{code}")
    public ResponseEntity<Administrateur> updateAdmin(@Valid @RequestBody Administrateur admin, @PathVariable("code") long code) {
	    return IA.updateAdmin(admin, code);
	}
	 @DeleteMapping("/removeAdmin/{code}")
	public ResponseEntity<?> deleteAdmin(@PathVariable("code") Long code) {  
	    return IA.deleteAdmin(code);
	}
	 @PutMapping("/updateCitoyenProfessionnel/{code}")
	    public ResponseEntity<CitoyenProfessionnel> updatectypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("code") long code) {
		 return IA.updatectypro(cytpro, code);
		}
	 @DeleteMapping("/removeCitoyenProfessionnel/{code}")
		    public ResponseEntity<?> deletectypro(@PathVariable("code") Long code) {  
		        return IA.deletectypro(code);
		    }
	 @PutMapping("/updateCitoyenSimple/{code}")
	    public ResponseEntity<CitoyenSimple> updatectysimple(@Valid @RequestBody CitoyenSimple cytsimple, @PathVariable("code") long code) {
		return IA.updatectysimple(cytsimple, code);
		}
		@DeleteMapping("/removeCitoyenSimple/{code}")
		public ResponseEntity<?> deletectysimple(@PathVariable("code") Long code) {  
		return IA.deletectysimple(code);
		}
		  @GetMapping("/allCitoyensProfessionnels")
		    public Collection<CitoyenProfessionnel> allctypro() {
		        return IA.allctypro();
		    }
		  @GetMapping("/allCitoyensSimples")
		    public Collection<CitoyenSimple> allctysimple() {
		        return IA.allctysimple();
		    }
		  @GetMapping("/GetCitoyenSimple/{code}")
			public ResponseEntity<?> getCitoyenSimpleById(@PathVariable("code") long code) {
				return IA.getCitoyenSimpleById(code);
			}
		  @GetMapping("/allAdmins")
		    public Collection<Administrateur> alladmins() {
		        return IA.alladmins();
		    }
}
