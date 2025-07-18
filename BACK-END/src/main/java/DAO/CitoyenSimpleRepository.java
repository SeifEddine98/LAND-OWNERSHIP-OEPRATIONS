package DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import ENTITIES.CitoyenSimple;

public interface CitoyenSimpleRepository extends JpaRepository<CitoyenSimple, Long> {
	public CitoyenSimple findByLogin(String login);

}
