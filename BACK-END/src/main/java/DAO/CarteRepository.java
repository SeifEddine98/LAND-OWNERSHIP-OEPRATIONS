package DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import ENTITIES.Carte;

public interface CarteRepository extends JpaRepository<Carte, Long> {
	public Carte findByNumCarte(Long numCarte);
}
