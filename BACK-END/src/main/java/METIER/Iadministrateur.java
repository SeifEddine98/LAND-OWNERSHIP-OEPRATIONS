package METIER;

import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import ENTITIES.Administrateur;
import ENTITIES.CitoyenProfessionnel;
import ENTITIES.CitoyenSimple;

public interface Iadministrateur {
	public ResponseEntity<Administrateur> addAdmin(@Valid @RequestBody Administrateur admin) throws URISyntaxException;
    public int AuthentAdmin(@Valid @RequestBody Administrateur admin);
    public ResponseEntity<Administrateur> updateAdmin(@Valid @RequestBody Administrateur admin, @PathVariable("code") long code);
	public ResponseEntity<?> deleteAdmin(@PathVariable("code") Long code);
	public ResponseEntity<CitoyenProfessionnel> updatectypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("code") long code);
	public ResponseEntity<?> deletectypro(@PathVariable("code") Long code);
	public ResponseEntity<CitoyenSimple> updatectysimple(@Valid @RequestBody CitoyenSimple cytsimple, @PathVariable("code") long code);
	public ResponseEntity<?> deletectysimple(@PathVariable("code") Long code);
	public Collection<CitoyenProfessionnel> allctypro();
	public Collection<CitoyenSimple> allctysimple();
	public Collection<Administrateur> alladmins();
	public ResponseEntity<?> getCitoyenSimpleById(@PathVariable("code") long code);
}
