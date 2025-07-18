package METIER;

import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import ENTITIES.Reclamation;

public interface Ireclamation {
	public ResponseEntity<Reclamation> NewRec(@Valid @RequestBody Reclamation reclamation) throws URISyntaxException;
	public Collection<Reclamation> allreclas();

}
