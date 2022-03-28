package br.com.equilibrium.main.consulta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class ConsultaService {

    @Autowired //Permite que trabalhe com outros arquivos, um dentro do outro (injeção de Dependencias)
    private ConsultaRepository consultaRepository;

    public List<Consulta> findAll() {
        return consultaRepository.findAll();
    }

    public  Consulta save(Consulta consulta, Errors errors) {
        return consultaRepository.save(consulta);
    }

    public Consulta findById(long id) {
        return consultaRepository.findById(id).get();
    }

    void deleteById(long id) {
        consultaRepository.deleteById(id);
    }
}
