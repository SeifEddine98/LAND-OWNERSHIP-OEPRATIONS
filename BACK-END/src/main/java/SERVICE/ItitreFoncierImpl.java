package SERVICE;

import java.util.Collection;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import DAO.TitreFoncierRepository;
import ENTITIES.TitreFoncier;
import METIER.ItitreFoncier;

@Service
@Transactional
public class ItitreFoncierImpl implements ItitreFoncier {
	@Autowired
	private TitreFoncierRepository repository;
	@Override
	public Collection<TitreFoncier> alltitres(@Valid @RequestBody TitreFoncier titre) {
		return repository.findAll().stream().
                filter(x -> x.getNumtitre().equals(titre.getNumtitre()))
                .collect(Collectors.toList());
	}

}
