package SERVICE;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import DAO.CarteRepository;
import ENTITIES.Carte;
import METIER.Ipayer;

@Service
@Transactional
public class IpayerImpl implements Ipayer {

	@Autowired
	private CarteRepository repository;

	@Override
	public int PayerConslt(@Valid @RequestBody Carte carte) {
		int x; 
		Carte x2 = repository.findByNumCarte(carte.getNumCarte());
        if(x2==null)
        	x=0;
        else {
            if ((x2.getCodeInternet()).equals(carte.getCodeInternet()))
            {
            		if((x2.getMontant())<3)
            			x=1;
            		else 
            		{
            			x2.setMontant((x2.getMontant())-3);
            			x=3;
            		}
            }
            else
            	x=2;
        }
        return x;
	}

	@Override
	public int PayerExtrait(@Valid Carte carte) {
		int x; 
		Carte x2 = repository.findByNumCarte(carte.getNumCarte());
        if(x2==null)
        	x=0;
        else {
            if ((x2.getCodeInternet()).equals(carte.getCodeInternet()))
            {
            		if((x2.getMontant())<2)
            			x=1;
            		else 
            		{
            			x2.setMontant((x2.getMontant())-2);
            			x=3;
            		}
            }
            else
            	x=2;
        }
        return x;
	}
}
