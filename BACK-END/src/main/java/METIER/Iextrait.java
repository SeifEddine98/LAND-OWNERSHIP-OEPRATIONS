package METIER;

import java.text.ParseException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import ENTITIES.Extrait;

public interface Iextrait {
	public Collection<Extrait> allextrait(@Valid @RequestBody Extrait extrait,@PathVariable("date1") String date1,@PathVariable("date2") String date2) throws ParseException;

}
