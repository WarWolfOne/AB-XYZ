package br.com.equilibrium.main.consulta;

import br.com.equilibrium.core.controller.ResponseAbtractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/consultas")

public class ConsultaController extends ResponseAbtractController {

    @Autowired
    private ConsultaService consultaService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return jsonResponse(consultaService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        return jsonResponse(consultaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Consulta consulta, Errors errors) {
        return jsonResponse(consultaService.save(consulta, errors));
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Consulta consulta, Errors errors) {
        return jsonResponse(consultaService.save(consulta, errors));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleById(@PathVariable long id) {
        consultaService.deleteById(id);
        return jsonResponse();
    }
}