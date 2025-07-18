package CONTROLLERS;

import java.net.URISyntaxException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ENTITIES.CitoyenProfessionnel;
import METIER.IcitoyenProfessionnel;
@RestController
@RequestMapping("/CitoyenProfessionnel")
public class CitoyenProfessionnelController {
	@Autowired
	private final IcitoyenProfessionnel ICP;

	public CitoyenProfessionnelController(IcitoyenProfessionnel icp) {
		super();
		ICP = icp;
	}
	
	@PostMapping("/newCitoyenProfessionnel")
	public ResponseEntity<CitoyenProfessionnel> addctypro(@Valid @RequestBody CitoyenProfessionnel cytpro) throws URISyntaxException {
		return ICP.addctypro(cytpro);
	}
	@GetMapping("/AuthenCitoyenProfessionnel/{mat}")
	public ResponseEntity<CitoyenProfessionnel> Authentctypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("mat") long mat)  {
	return ICP.Authentctypro(cytpro, mat);
	}
	
	@PutMapping("/updateCitoyenProfessionnel/{code}")
    public ResponseEntity<CitoyenProfessionnel> updatectypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("code") long code) {
	 return ICP.updatectypro(cytpro, code);
	}
	 @DeleteMapping("/removeCitoyenProfessionnel/{code}")
	    public ResponseEntity<?> deletectypro(@PathVariable("code") Long code) {  
	        return ICP.deletectypro(code);
	    }

}
