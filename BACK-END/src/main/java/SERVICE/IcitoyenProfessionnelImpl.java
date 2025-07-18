package SERVICE;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import DAO.CitoyenProfessionnelRepository;
import ENTITIES.CitoyenProfessionnel;
import METIER.IcitoyenProfessionnel;

@Service
@Transactional
public class IcitoyenProfessionnelImpl implements IcitoyenProfessionnel {
	@Autowired
	private CitoyenProfessionnelRepository repository;
	
	@Override
	public ResponseEntity<CitoyenProfessionnel> addctypro(@Valid @RequestBody CitoyenProfessionnel cytpro) throws URISyntaxException {
		CitoyenProfessionnel result = repository.save(cytpro);
        return ResponseEntity.created(new URI("/newCitoyenProfessionnel" + result.getCode())).body(result);
	}

	@Override
	public ResponseEntity<CitoyenProfessionnel> Authentctypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("mat") long mat)  {
		 Optional<CitoyenProfessionnel> x2 = repository.findById(mat);
	        if (x2.isEmpty())
	            return ResponseEntity.notFound().build();
	        else {
	            if (cytpro.getPassword().equals(x2.get().getPassword()) && cytpro.getLogin().equals(x2.get().getLogin()))
	                return ResponseEntity.ok().build();
	            else
	            return ResponseEntity.notFound().build();
	        }
	}

	@Override
    public ResponseEntity<CitoyenProfessionnel> updatectypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("code") long code)
	{
        Optional<CitoyenProfessionnel> ctyproOptional = repository.findById(code);

        if (ctyproOptional.isEmpty())
            return ResponseEntity.notFound().build();

        CitoyenProfessionnel ctypro1 = ctyproOptional.get();
        ctypro1.setCin(cytpro.getCin());
        ctypro1.setNom(cytpro.getNom());
        ctypro1.setEmail(cytpro.getEmail());
        ctypro1.setPrenom(cytpro.getPrenom());
        ctypro1.setAge(cytpro.getAge());
        ctypro1.setNumTel(cytpro.getNumTel());
        ctypro1.setLogin(cytpro.getLogin());
        ctypro1.setPassword(cytpro.getPassword());
        ctypro1.setSolde(cytpro.getSolde());
        CitoyenProfessionnel result = repository.save(ctypro1);
        return ResponseEntity.ok().body(result);
		
	}

	@Override
	public ResponseEntity<?> deletectypro(Long code) {
		repository.deleteById(code);
        return ResponseEntity.ok().build();
	}


}
