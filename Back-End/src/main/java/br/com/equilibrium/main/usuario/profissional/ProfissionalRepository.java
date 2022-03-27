package br.com.equilibrium.main.usuario.profissional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {
    //Jpa tras funções pré-programadas como busca, exclusoes etc.
}