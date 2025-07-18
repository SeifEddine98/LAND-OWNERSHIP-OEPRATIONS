package CONTROLLERS;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ENTITIES.TitreFoncier;
import METIER.ItitreFoncier;

@RestController
@RequestMapping("/TitreFoncier")
@CrossOrigin(origins ="http://localhost:8100")
public class TitreFoncierController {
	
	@Autowired
	private final ItitreFoncier IT;

	public TitreFoncierController(ItitreFoncier iT) {
		super();
		IT = iT;
	}
	@PostMapping("/ConsltTitre")
	public Collection<TitreFoncier> allextrait(@Valid @RequestBody TitreFoncier titre)
	{
		return IT.alltitres(titre);
	}
}
