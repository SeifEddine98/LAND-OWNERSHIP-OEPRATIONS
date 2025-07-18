package SERVICE;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import DAO.AdministrateurRepository;
import DAO.CitoyenProfessionnelRepository;
import DAO.CitoyenSimpleRepository;
import ENTITIES.Administrateur;
import ENTITIES.CitoyenProfessionnel;
import ENTITIES.CitoyenSimple;
import METIER.Iadministrateur;

@Service
@Transactional
public class IadministrateurImpl implements Iadministrateur {
	
	@Autowired
	private AdministrateurRepository repository;
	@Autowired
	private CitoyenProfessionnelRepository repository1;
	@Autowired
	private CitoyenSimpleRepository repository2;

	
	@Override
	public ResponseEntity<Administrateur> addAdmin(@Valid @RequestBody Administrateur admin) throws URISyntaxException {
		Administrateur result = repository.save(admin);
        return ResponseEntity.created(new URI("/newAdmin" + result.getCode())).body(result);
	}

	@Override
	public int AuthentAdmin(@Valid @RequestBody Administrateur admin)  {
		int x; 
		Administrateur x2 = repository.findByLogin(admin.getLogin());
        if(x2==null)
        	x=0;
        else {
            if ((admin.getLogin().equals(x2.getLogin()))&&(admin.getPassword().equals(x2.getPassword())))
                x=1;
            else
            	x=0;
        }
        return x;
	}

	@Override
    public ResponseEntity<Administrateur> updateAdmin(@Valid @RequestBody Administrateur admin, @PathVariable("code") long code)
	{
        Optional<Administrateur> adminOptional = repository.findById(code);

        if (adminOptional.isEmpty())
            return ResponseEntity.notFound().build();

        Administrateur admin1 = adminOptional.get();
        admin1.setCin(admin.getCin());
        admin1.setNom(admin.getNom());
        admin1.setEmail(admin.getEmail());
        admin1.setPrenom(admin.getPrenom());
        admin1.setAge(admin.getAge());
        admin1.setNumTel(admin.getNumTel());
        admin1.setLogin(admin.getLogin());
        admin1.setPassword(admin.getPassword());
        admin1.setRole(admin.getRole());
        Administrateur result = repository.save(admin1);
        return ResponseEntity.ok().body(result);
		
	}

	@Override
	public ResponseEntity<?> deleteAdmin(Long code) {
		repository.deleteById(code);
        return ResponseEntity.ok().build();
	}
	@Override
    public ResponseEntity<CitoyenProfessionnel> updatectypro(@Valid @RequestBody CitoyenProfessionnel cytpro, @PathVariable("code") long code)
	{
        Optional<CitoyenProfessionnel> ctyproOptional = repository1.findById(code);

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
        CitoyenProfessionnel result = repository1.save(ctypro1);
        return ResponseEntity.ok().body(result);
		
	}
	@Override
	public ResponseEntity<?> deletectypro(Long code) {
		repository1.deleteById(code);
        return ResponseEntity.ok().build();
	}
	
	@Override
    public ResponseEntity<CitoyenSimple> updatectysimple(@Valid @RequestBody CitoyenSimple cytsimple, @PathVariable("code") long code)
	{
        Optional<CitoyenSimple> ctysimpleOptional = repository2.findById(code);

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
        CitoyenSimple result = repository2.save(ctysimple1);
        return ResponseEntity.ok().body(result);
		
	}
	
	@Override
	public ResponseEntity<?> deletectysimple(Long code) {
		repository2.deleteById(code);
        return ResponseEntity.ok().build();
	}
	@Override
	public Collection<CitoyenProfessionnel> allctypro() {
        return repository1.findAll();
    }
	
	@Override
	public Collection<CitoyenSimple> allctysimple() {
        return repository2.findAll();
    }
	@Override
	public ResponseEntity<?> getCitoyenSimpleById(@PathVariable("code") long code) {
		Optional<CitoyenSimple> x = repository2.findById(code);
        return x.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	@Override
	public Collection<Administrateur> alladmins() {
        return repository.findAll();
    }
	
}
