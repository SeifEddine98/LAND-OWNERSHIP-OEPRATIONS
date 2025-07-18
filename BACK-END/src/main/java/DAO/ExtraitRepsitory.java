package DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import ENTITIES.Extrait;

public interface ExtraitRepsitory extends JpaRepository<Extrait, Long> {
	public Extrait findByNumtitre(Long numtitre);
}
