package METIER;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.RequestBody;

import ENTITIES.Carte;

public interface Ipayer {

    public int PayerConslt(@Valid @RequestBody Carte carte);
    public int PayerExtrait(@Valid @RequestBody Carte carte);

}
