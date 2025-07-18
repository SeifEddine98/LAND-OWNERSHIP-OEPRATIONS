package DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import ENTITIES.Administrateur;

public interface AdministrateurRepository extends JpaRepository<Administrateur, Long> {
	public Administrateur findByLogin(String login);

}
