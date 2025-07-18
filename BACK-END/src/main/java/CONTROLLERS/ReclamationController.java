package CONTROLLERS;

import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ENTITIES.Reclamation;
import METIER.Ireclamation;

@RestController
@RequestMapping("/Reclamation")
@CrossOrigin(origins ="http://localhost:8100")
public class ReclamationController {

	@Autowired
	private final Ireclamation IR;

	public ReclamationController(Ireclamation iR) {
		super();
		IR = iR;
	}
	@PostMapping("/newReclamation")
	public ResponseEntity<Reclamation> newReclamation(@Valid @RequestBody Reclamation reclamation) throws URISyntaxException {
		return IR.NewRec(reclamation);
	}
	 @GetMapping("/allReclas")
	    public Collection<Reclamation> allreclas() {
	        return IR.allreclas();
	    }
}
