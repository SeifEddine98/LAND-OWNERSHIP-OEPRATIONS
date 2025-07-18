package SERVICE;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.SQLException;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import DAO.CitoyenSimpleRepository;
import ENTITIES.CitoyenSimple;
import METIER.IcitoyenSimple;

@Service
@Transactional
public class IcitoyenSimpleImpl implements IcitoyenSimple {
	@Autowired
	private CitoyenSimpleRepository repository;
	
	@Override
	public ResponseEntity<CitoyenSimple> addctysimple(@Valid @RequestBody CitoyenSimple cytsimple) throws SQLException,URISyntaxException {
		CitoyenSimple result = repository.save(cytsimple);
        return ResponseEntity.created(new URI("/newCitoyenSimple" + result.getCode())).body(result);
	}

	@Override
	public int Authentctysimple(@Valid @RequestBody CitoyenSimple cytsimple)  {
		int x; 
		CitoyenSimple x2 = repository.findByLogin(cytsimple.getLogin());
        if(x2==null)
        	x=0;
        else {
            if ((cytsimple.getLogin().equals(x2.getLogin()))&&(cytsimple.getPassword().equals(x2.getPassword())))
                x=1;
            else
            	x=0;
        }
        return x;
	}
	@Override
    public ResponseEntity<CitoyenSimple> updatectysimple(@Valid @RequestBody CitoyenSimple cytsimple, @PathVariable("code") long code)
	{
        Optional<CitoyenSimple> ctysimpleOptional = repository.findById(code);

        if (ctysimpleOptional.isEmpty())
            return ResponseEntity.notFound().build();

        CitoyenSimple ctysimple1 = ctysimpleOptional.get();
        ctysimple1.setCin(cytsimple.getCin());
        ctysimple1.setNom(cytsimple.getNom());
        ctysimple1.setEmail(cytsimple.getEmail());
        ctysimple1.setPrenom(cytsimple.getPrenom());
        ctysimple1.setAge(cytsimple.getAge());
        ctysimple1.setNumTel(cytsimple.getNumTel());
        ctysimple1.setLogin(cytsimple.getLogin());
        ctysimple1.setPassword(cytsimple.getPassword());
        ctysimple1.setTitre(cytsimple.getTitre());
        CitoyenSimple result = repository.save(ctysimple1);
        return ResponseEntity.ok().body(result);
		
	}

	@Override
	public ResponseEntity<?> deletectysimple(Long code) {
		repository.deleteById(code);
        return ResponseEntity.ok().build();
	}

	@Override
	public ResponseEntity<?> getCitoyenSimpleById(@PathVariable("code") long code) {
		Optional<CitoyenSimple> x = repository.findById(code);
        return x.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

}
