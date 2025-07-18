package METIER;

import java.net.URISyntaxException;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import ENTITIES.CitoyenProfessionnel;

public interface IcitoyenProfessionnel {
	
	public ResponseEntity<CitoyenProfessionnel> addctypro(@Valid @RequestBody CitoyenProfessionnel cytpro) throws URISyntaxException;
    public ResponseEntity<CitoyenProfessionnel> Authentctypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("mat") long mat) ;
    public ResponseEntity<CitoyenProfessionnel> updatectypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("code") long code);
	public ResponseEntity<?> deletectypro(@PathVariable("code") Long code);
	
}
