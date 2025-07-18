package CONTROLLERS;

import java.net.URISyntaxException;
import java.sql.SQLException;

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

import ENTITIES.CitoyenSimple;
import METIER.IcitoyenSimple;

@RestController
@RequestMapping("/CitoyenSimple")
@CrossOrigin(origins ="http://localhost:8100")

public class CitoyenSimpleController {
	@Autowired
	private final IcitoyenSimple ICS;

	public CitoyenSimpleController(IcitoyenSimple ics) {
		super();
		ICS = ics;
	}
	
	@PostMapping("/newCitoyenSimple")
	public ResponseEntity<CitoyenSimple> addctysimple(@Valid @RequestBody CitoyenSimple cytsimple) throws URISyntaxException,SQLException {
	return ICS.addctysimple(cytsimple);
	}
	@PostMapping("/AuthenCitoyenSimple")
	public int Authentctysimple(@Valid @RequestBody CitoyenSimple cytsimple)  {
	return ICS.Authentctysimple(cytsimple);
	}
	@PutMapping("/updateCitoyenSimple/{code}")
    public ResponseEntity<CitoyenSimple> updatectysimple(@Valid @RequestBody CitoyenSimple cytsimple, @PathVariable("code") long code) {
	return ICS.updatectysimple(cytsimple, code);
	}
	@DeleteMapping("/removeCitoyenSimple/{code}")
	public ResponseEntity<?> deletectysimple(@PathVariable("code") Long code) {  
	return ICS.deletectysimple(code);
	}
	@GetMapping("/GetCitoyenSimple/{code}")
	public ResponseEntity<?> getCitoyenSimpleById(@PathVariable("code") long code) {
		return ICS.getCitoyenSimpleById(code);
	}


}
