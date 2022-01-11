package br.com.equilibrium.main.usuario.pessoa;

//Consultas comecam pelo Repositorio.

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    //Jpa tras funções pré-programadas como busca, exclusoes etc.
}
