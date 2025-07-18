package METIER;

import java.util.Collection;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import ENTITIES.TitreFoncier;

public interface ItitreFoncier {

	public Collection<TitreFoncier> alltitres(@Valid @RequestBody TitreFoncier titre);

}
