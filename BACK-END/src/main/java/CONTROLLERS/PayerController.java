package CONTROLLERS;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ENTITIES.Carte;
import METIER.Ipayer;

@RestController
@RequestMapping("/Payer")
@CrossOrigin(origins ="http://localhost:8100")

public class PayerController {
	@Autowired
	private final Ipayer IP;

	public PayerController(Ipayer iP) {
		super();
		IP = iP;
	}
	@PostMapping("/PayerConst")
	public int PayerConslt(@Valid @RequestBody Carte carte)
	{
		return IP.PayerConslt(carte);
	}
	@PostMapping("/PayerExtrait")
	public int PayerExtrait(@Valid @RequestBody Carte carte)
	{
		return IP.PayerExtrait(carte);
	}
}
