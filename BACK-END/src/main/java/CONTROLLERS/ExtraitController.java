package CONTROLLERS;

import java.text.ParseException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ENTITIES.Extrait;
import METIER.Iextrait;

@RestController
@RequestMapping("/Extrait")
@CrossOrigin(origins ="http://localhost:8100")

public class ExtraitController {
	@Autowired
	private final Iextrait IE;

	public ExtraitController(Iextrait iE) {
		super();
		IE = iE;
	}
	@PostMapping("/ConsltExtrait/{date1}/{date2}")
	public Collection<Extrait> allextrait(@Valid @RequestBody Extrait extrait,@PathVariable("date1") String date1,@PathVariable("date2") String date2) throws ParseException
	{
		return IE.allextrait(extrait, date1, date2);
	}

}
