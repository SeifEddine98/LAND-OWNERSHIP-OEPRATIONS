package SERVICE;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import DAO.ReclamationRepository;
import ENTITIES.Reclamation;
import METIER.Ireclamation;

@Service
@Transactional
public class IreclamationImpl implements Ireclamation {
	
	@Autowired
	private ReclamationRepository repository;
	
	@Override
	public ResponseEntity<Reclamation> NewRec(@Valid Reclamation reclamation) throws URISyntaxException  {
		Reclamation result = repository.save(reclamation);
        return ResponseEntity.created(new URI("/newReclamation" + result.getCode())).body(result);
	}

	@Override
	public Collection<Reclamation> allreclas() {
		return repository.findAll();
	}

}
