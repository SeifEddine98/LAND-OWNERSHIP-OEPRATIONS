package METIER;

import java.net.URISyntaxException;
import java.sql.SQLException;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import ENTITIES.CitoyenSimple;

public interface IcitoyenSimple {
	public ResponseEntity<CitoyenSimple> addctysimple(@Valid @RequestBody CitoyenSimple cytsimple) throws SQLException,URISyntaxException;
    public int Authentctysimple(@Valid @RequestBody CitoyenSimple cytsimple);
    public ResponseEntity<CitoyenSimple> updatectysimple(@Valid @RequestBody CitoyenSimple cytsimple, @PathVariable("code") long code);
	public ResponseEntity<?> deletectysimple(@PathVariable("code") Long code);
	public ResponseEntity<?> getCitoyenSimpleById(@PathVariable("code") long code);
}
