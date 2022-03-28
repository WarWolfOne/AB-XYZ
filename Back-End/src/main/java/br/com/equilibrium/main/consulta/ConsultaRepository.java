package br.com.equilibrium.main.consulta;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
    //Jpa tras funções pré-programadas como busca, exclusoes etc.
}