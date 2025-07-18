package SERVICE;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import DAO.ExtraitRepsitory;
import ENTITIES.Extrait;
import METIER.Iextrait;

@Service
@Transactional
public class IextraitImpl implements Iextrait {
	@Autowired
	private ExtraitRepsitory repository;

	@Override
	public Collection<Extrait> allextrait(@Valid @RequestBody Extrait extrait,@PathVariable("date1") String date1,@PathVariable("date2") String date2) throws ParseException { 
		Date dated=new SimpleDateFormat("yyyy-MM-dd").parse(date1);  
		Date datef=new SimpleDateFormat("yyyy-MM-dd").parse(date2);  
		
		return repository.findAll().stream().
                filter(x -> x.getNumtitre().equals(extrait.getNumtitre())).filter(x -> x.getDatecn().after(dated)).filter(x -> x.getDatecn().before(datef))
                .collect(Collectors.toList());
	}

}
