package DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import ENTITIES.TitreFoncier;

public interface TitreFoncierRepository extends JpaRepository<TitreFoncier, Long> {
	public TitreFoncier findByNumtitre(Long numtitre);
}
