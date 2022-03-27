package br.com.equilibrium.main.usuario.profissional;

//Regras de negocio.

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class ProfissionalService {

    @Autowired //Permite que trabalhe com outros arquivos, um dentro do outro (injeção de Dependencias)
    private ProfissionalRepository profissionalRepository;

    public List<Profissional> findAll() {
        return profissionalRepository.findAll();
    }

    public  Profissional save(Profissional profissional, Errors errors) {
        return profissionalRepository.save(profissional);
    }

    public Profissional findById(long id) {
        return profissionalRepository.findById(id).get();
    }

    void deleteById(long id) {
        profissionalRepository.deleteById(id);
    }
}